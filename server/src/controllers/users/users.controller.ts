import { Request, response, Response } from 'express'
// import { ShoppingCart } from 'src/entity/cart.entity'
import { ShoppingCart } from '../../entity/cart.entity'
import { Pets } from '../../entity/pets.entity'
import { Users } from '../../entity/users.entity'
import { AppDataSource } from '../../utils/data-source'

export class UsersController {
    static GetMe = async (
        req: Request,
        res: Response
    ): Promise<Users | any> => {
        // const paramsId: number = Number(req.params.id)
        // console.log('User Id:', paramsId)
        const userId = Number(res.locals.jwtPayload.Id)
        // const data = res.locals.jwtPayload
        // const userId: number = await UsersController.GetCurrentUserId(res)
        const userRepository = AppDataSource.getRepository(Users)
        let user: Users | any = await userRepository.findOne({
            where: { id: userId },
        })
        if (!user) res.status(404).json('User not found')
        try {
            if (userId === user!.id) {
                return res.status(200).json(user)
            }
        } catch (error) {
            res.status(500).send(error)
            return
        }
    }

    static GetCurrentUserId = async (res: Response): Promise<Users['id']> => {
        const userId: number = Number(res.locals.jwtPayload.id)
        if (!userId) res.status(401).json('User id is required, Please Login!')
        return userId
    }

    static GetAllPetPost = async (
        req: Request,
        res: Response
    ): Promise<Users | any> => {
        const userId: number = Number(res.locals.jwtPayload.id)
        const postId: number = Number(req.params.id)
        try {
            const usersRepository = AppDataSource.getRepository(Users)
            const user = await usersRepository.find({
                where: { id: userId },
                relations: ['pet'],
            })
            const allPostInUser = user[0].pet
            res.status(200).json(allPostInUser)
        } catch (error) {
            res.status(500).send(error)
            return
        }
    }
    static GetAllUserAdmin = async (
        req: Request,
        res: Response
    ): Promise<Users[] | any> => {
        try {
            const usersRepository = AppDataSource.getRepository(Users)
            const AllUser: Users[] = await usersRepository.find()

            return res.status(200).json(AllUser)
        } catch (error) {
            res.status(404).send(error)
        }
    }

    static UpdateUser = async (req: Request, res: Response): Promise<any> => {
        const userId = Number(res.locals.jwtPayload.id)
        const data: Users = req.body
        try {
            const usersRepository = AppDataSource.getRepository(Users)
            const user = await usersRepository.findOne({
                where: { id: userId },
            })
            const updated = await usersRepository.update(user!.id, { ...data })
            if (updated) {
                return res.status(200).json('Update user successfully')
            }
        } catch (error) {
            res.status(404).send(error)
            return
        }
    }
}
