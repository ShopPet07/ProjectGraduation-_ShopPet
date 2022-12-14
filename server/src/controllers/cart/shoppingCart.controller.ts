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
                // const usersRepository = AppDataSource.getRepository(Users)
                const petsRepository = AppDataSource.getRepository(Pets)
                const cart = new ShoppingCart()
                // const user: Users = new Users()
                const pet = new Pets()
                const pets: Pets | any = await petsRepository.findOne({
                    where: { id: petId },
                })
                pet.carts = [cart]
                cart.pet = pets
                cart.userId = userId
                // user.cart = [cart]

                await petsRepository.create(pet)
                await cartRepository.save(cart)
                // await usersRepository.create(user)
                // if (saveCart.id !== petId) {
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
            // const cartInUser = await cartRepository.find({
            //     where: {
            //         userId: userId,
            //     },
            // })
            // console.log('Check cart in user', cartInUser)
            // const user = await usersRepository.find()
            const cart: ShoppingCart | any = await cartRepository.find({
                where: { userId: userId },
                relations: ['pet'],
            })

            const petInCart = cart.map((item: any) => {
                return item.pet
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
