import { Request, Response } from 'express'
import { AppDataSource } from '../../utils/data-source'
import { Pets } from '../../entity/pets.entity'
import { Users } from '../../entity/users.entity'
import { ShoppingCart } from '../../entity/cart.entity'

export class ShoppingCartController {
    static AddToCart = async (req: Request, res: Response): Promise<any> => {
        const petId: number = Number(req.params.id)
        const userId: number = Number(res.locals.jwtPayload.id)
        try {
            if (userId) {
                const cartRepository = AppDataSource.getRepository(ShoppingCart)
                const usersRepository = AppDataSource.getRepository(Users)
                const cart = new ShoppingCart()
                cart.productId = petId
                cart.userId = userId
                const pets: any = new Pets()
                pets.productId = petId
                cart.pet = [pets]
                const saveCart = await cartRepository.save(cart)
                // console.log('Check save cart:', saveCart)
                // if (saveCart.productId !== petId) {
                //     await cartRepository.save(saveCart)
                //     return res.status(200).json(cart)
                // } else {
                //     res.send('Product already exists')
                // }
                return res.status(200).json(cart)
            }
        } catch (error) {
            res.status(403).send(error)
            console.log(error)
            return
        }
    }

    static GetAllProductInCart = async (
        req: Request,
        res: Response
    ): Promise<Pets | any> => {
        const userId: number = Number(res.locals.jwtPayload.id)
        try {
            const cartRepository: ShoppingCart | any =
                AppDataSource.getRepository(ShoppingCart)
            const usersRepository = AppDataSource.getRepository(Users)
            const cartInUser = await cartRepository.find({
                where: {
                    userId: userId,
                },
            })
            console.log('Check cart in user', cartInUser)
            // const user = await usersRepository.find()
            const cart: ShoppingCart | any = await cartRepository.find({
                where: { userId: cartInUser.userId },
                relations: {
                    pet: true,
                },
            })

            const petInCart = cart.map((item: any, index: number) => {
                console.log(item.userId)
                console.log({ userId })
                if (cart.userId === userId) {
                    return item.pet[0]
                }
            })
            // console.log(petInCart)

            return res.status(200).json(petInCart)
        } catch (error) {
            res.status(500).send(error)
            return
        }
    }

    static DeletePostFromCart = async (req: Request, res: Response) => {
        const userId: number = Number(res.locals.jwtPayload.id)
        const petId = req.body.cartId
        try {
        } catch (error) {
            res.status(403).send(error)
        }
    }
}
