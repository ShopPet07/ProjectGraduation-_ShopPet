import { Request, Response } from 'express'
// import { ShoppingCart } from '../../entity/cart.entity'
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
                await cartRepository.save(cart)

                const user: Users | any = new Users()
                user.cart = cart
                console.log('Chcek cart in user:', user.cart)
                const newUser = await usersRepository.create(user)
                // console.log(user.cart)
                usersRepository.save(newUser)
                return res.status(200).json(cart)
            }
        } catch (error) {
            res.status(403).send(error)
            return
        }
    }

    static GettAllProductInCart = async (
        req: Request,
        res: Response
    ): Promise<Pets | any> => {
        const userId: number = Number(res.locals.jwtPayload.id)
        try {
            const cartRepository: ShoppingCart | any =
                AppDataSource.getRepository(ShoppingCart)
            const cart: ShoppingCart | any = await cartRepository.find({
                where: { userId: userId },
                relations: ['pet'],
            })

            const petInCart = cart.map((item: any) => {
                console.log(item.pet.flat())
                return item.pet
            })
            return res.status(200).json(petInCart)
        } catch (error) {
            res.status(500).send(error)
            return
        }
    }

    static DeletePostFromCart = async (req: Request, res: Response) => {
        const userId: number = Number(res.locals.jwtPayload.id)
        const petId: number = Number(req.params.id)
        try {
        } catch (error) {
            res.status(403).send(error)
        }
    }
}
