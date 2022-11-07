import { Request, Response } from 'express'
// import { ShoppingCart } from '../../entity/cart.entity'
import { AppDataSource } from '../../utils/data-source'
import { Pets } from '../../entity/pets.entity'
import { Users } from '../../entity/users.entity'
import { ShoppingCart } from '../../entity/cart.entity'

export class ShoppingCartController {
    static AddToCart = async (
        req: Request,
        res: Response
    ): Promise<ShoppingCart | any> => {
        const petId: number = Number(req.params.id)
        const userId: number = Number(res.locals.jwtPayload.id)
        try {
            if (userId) {
                const cartRepository = AppDataSource.getRepository(ShoppingCart)
                const usersRepository = AppDataSource.getRepository(Users)
                const cart = new ShoppingCart()
                cart.productId = petId
                cart.userId = userId
                await cartRepository.create(cart)
                console.log('Check pet:', cart)
                const user: Users | any = new Users()
                user.cart = cart
                const newUser = await usersRepository.create(user)

                console.log('Check user:', user)
                // await cartRepository.save(cart)
                // await usersRepository.save(user)

                res.status(200).json(newUser)
            }
        } catch (error) {
            res.status(500).send(error)
            return
        }
    }

    static GettAllProductInCart = async (
        req: Request,
        res: Response
    ): Promise<Pets | any> => {
        const userId: number = Number(res.locals.jwtPayload.id)
        // const producIt: number = Number(req.params.id)
        try {
            const cartRepository: ShoppingCart | any =
                AppDataSource.getRepository(ShoppingCart)
            const petsRepository: Pets | any = AppDataSource.getRepository(Pets)
            // const findCart = cartRepository.findOne({
            //     where: { cartId: userId },
            // })
            // const pets = await petsRepository.findOne({
            //     where: { userId: userId },
            // })

            const cart: ShoppingCart | any = await cartRepository.find({
                where: { userId: userId },
            })
            const petInCart: Pets = await petsRepository.find({
                where: { productId: cart.productId },
            })
            // const allPostInUser = user[0].pet
            console.log(petInCart)
            res.status(200).json(petInCart)
        } catch (error) {
            res.status(500).send(error)
            return
        }
    }
}
