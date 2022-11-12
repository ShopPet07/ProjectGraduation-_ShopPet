import { Request, Response } from 'express'
import { AuthRegister, AuthLogin } from './auth.dto'
import { Users } from '../../entity/users.entity'
import { AppDataSource } from '../../utils/data-source'
import bcrypt from 'bcrypt'
import jwt from 'jsonwebtoken'
import config from 'config'
import HttpException from '../../utils/HttpException'
import { STATUS_CODES } from 'http'
import { ShoppingCart } from '../../entity/cart.entity'
// import { PassThrough } from 'stream'
export class AuthController {
    static Register = async (
        req: Request,
        res: Response
    ): Promise<AuthRegister | any> => {
        const data: AuthRegister = req.body
        try {
            const usersRepository = AppDataSource.getRepository(Users)
            const user: any = await AuthController.validateUser(data.email)
            if (user) {
                res.status(401).json('User already exists')
                return
            }
            const hashed: string = bcrypt.hashSync(data.password, 8)
            const newUser = await usersRepository.save({
                ...data,
                password: hashed,
            })
            // await cartRepository.save({ cartId: newUser.id })
            return res.status(200).json(newUser.email)
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
        // const key = process.env.JWT_KEY
        try {
            const user: Users | any = await AuthController.validateUser(
                data.email
            )
            // console.log('check user', user)
            if (!user) {
                res.status(404).send('UserNotFound')
                return
            }
            // const validPassword = await bcrypt.compare(
            //     data!.password,
            //     user!.password
            // )
            // console.log('Check password', validPassword)
            if (!user.checkIfUnencryptedPasswordIsValid(data.password)) {
                res.status(401).send('Password is not match')
                return
            }
            const token: string = jwt.sign(
                {
                    id: user!.id,
                    email: user!.email,
                    role: user!.role,
                },
                config.get<string>('JWT_KEY')
            )
            // console.log('Check token:', token)
            return res
                .cookie('access_token', token, {
                    httpOnly: true,
                })
                .status(200)
                .json({ userEmail: user!.email, userId: user!.id })
        } catch (error) {
            res.status(403).send(error)
            // console.log(error)
        }
    }

    static Logout = async (req: Request, res: Response) => {
        res.clearCookie('access_token').status(200).json('Logout success')
    }

    static validateUser = async (email: string): Promise<Users | null> => {
        const usersRepository = AppDataSource.getRepository(Users)
        const user = await usersRepository.findOne({ where: { email } })
        // console.log('check validate user', user)
        return user
    }
}
