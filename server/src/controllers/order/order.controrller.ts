import { Pets } from './../../entity/pets.entity'
import { Users } from './../../entity/users.entity'
import { AppDataSource } from './../../utils/data-source'
import { Request, Response } from 'express'

export class OrderController {
    static OrderProduct = async (req: Request, res: Response) => {
        const recipientId: number = Number(res.locals.jwtPayload.id)
        const listId = req.body.cartId
        try {
            const user = AppDataSource.getRepository(Users)
            const pets = AppDataSource.getRepository(Pets)
            const recipient = await user.findOne({ where: { id: recipientId } })
            let products: Pets[] | any = []
            let listProductSame = []
        } catch (error) {
            res.status(403).send(error)
            return
        }
    }
}
