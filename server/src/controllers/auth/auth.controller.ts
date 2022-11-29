import { Request, Response } from 'express'
import { AuthRegister, AuthLogin } from './auth.dto'
import { Users } from '../../entity/users.entity'
import { AppDataSource } from '../../utils/data-source'
import bcrypt from 'bcrypt'
import jwt from 'jsonwebtoken'
import config from 'config'
export class AuthController {
    static Register = async (
        req: Request,
        res: Response
    ): Promise<AuthRegister | any> => {
        const data: AuthRegister = req.body
        try {
            const usersRepository = AppDataSource.getRepository(Users)
            const user: any = await AuthController.validateUser(
                data.email,
                data.username
            )
            if (user) {
                return res.status(401).json('User already exists')
            } else {
                const hashed: string = bcrypt.hashSync(data.password, 8)
                const newUser = await usersRepository.save({
                    ...data,
                    password: hashed,
                })
                return res.status(200).json(newUser.email)
            }
        } catch (error) {
            res.status(500).send(error)
            return
        }
    }

    static Login = async (
        req: Request,
        res: Response
    ): Promise<Users | any> => {
        const data: AuthLogin = req.body
        try {
            const user: Users | any = await AuthController.validateUser(
                data.email,
                data.username
            )
            if (!user) {
                res.status(404).send('UserNotFound')
                return
            }
            if (!user.checkIfUnencryptedPasswordIsValid(data.password)) {
                res.status(401).send('Password is not match')
                return
            }
            const token: string = jwt.sign(
                {
                    id: user!.id,
                    email: user!.email,
                    username: user!.username,
                    role: user!.role,
                },
                config.get<string>('JWT_KEY')
            )
            console.log(
                'Check cookies:',
                res.cookie('access_token', token, {
                    httpOnly: true,
                })
            )
            return res
                .cookie('access_token', token, {
                    httpOnly: true,
                })
                .status(200)
                .json({
                    id: user!.id,
                    username: user!.username,
                    email: user!.email,
                })
        } catch (error) {
            res.status(403).send(error)
        }
    }

    static Logout = async (req: Request, res: Response) => {
        res.clearCookie('access_token').status(200).json('Logout success')
    }

    static validateUser = async (
        email: string,
        username: string
    ): Promise<Users | null> => {
        const usersRepository = AppDataSource.getRepository(Users)
        const user = await usersRepository.findOne({
            where: [{ email }, { username }],
        })
        return user
    }

    static ForgotPassword = async (req: Request, res: Response) => {
        const { email, lastName, firstName, newPassword } = req.body
        console.log(req.body)
        try {
            const usersRepository = AppDataSource.getRepository(Users)
            const user = await usersRepository.findOne({
                where: { email: email },
            })
            if (
                email !== user!.email &&
                lastName !== user!.lastName &&
                firstName !== user!.firstName
            ) {
                res.status(403).json('Data is validateUser')
            } else {
                const hashPassword = bcrypt.hashSync(newPassword, 8)
                const newUser = await usersRepository.update(user!.id, {
                    password: hashPassword,
                })
                res.status(200).json('Change Password is successful')
            }
        } catch (error) {
            res.status(402).send(error)
            return
        }
    }
}
