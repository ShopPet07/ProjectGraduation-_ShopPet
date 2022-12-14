import { Request, Response } from 'express'
import { AppDataSource } from '../../utils/data-source'
import { Pets } from '../../entity/pets.entity'
import { ShoppingCart } from '../../entity/cart.entity'

export class ShoppingCartController {
    static AddToCart = async (req: Request, res: Response): Promise<any> => {
        const petId: number = Number(req.params.id)
        const userId: number = Number(res.locals.jwtPayload.id)
        console.log('Check user id:', userId)
        try {
            if (userId) {
                const cartRepository = AppDataSource.getRepository(ShoppingCart)
                const petsRepository = AppDataSource.getRepository(Pets)
                const cart = new ShoppingCart()
                const pet = new Pets()
                const pets: Pets | any = await petsRepository.findOne({
                    where: { id: petId },
                })
                pet.carts = [cart]
                cart.pet = pets
                cart.productId = petId
                cart.userId = userId
                const checkCart = await cartRepository.findOne({
                    where: { userId: userId, productId: petId },
                })
                console.log('Check cart:', checkCart)
                if (!checkCart) {
                    await petsRepository.create(pet)
                    await cartRepository.save(cart)
                    return res.status(201).json(cart)
                } else if (checkCart) {
                    res.status(403).send('Product already exists')
                }
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
            const cart: ShoppingCart | any = await cartRepository.find({
                where: { userId: userId },
                relations: ['pet'],
            })

            const petInCart = cart.map((item: any) => {
                return item.pet
            })

            return res.status(200).json(petInCart)
        } catch (error) {
            res.status(500).send(error)
            return
        }
    }

    static DeletePostFromCart = async (
        req: Request,
        res: Response
    ): Promise<any> => {
        const userId: number = Number(res.locals.jwtPayload.id)
        const data = req.body
        console.log(data)
        try {
            const cartRepository = AppDataSource.getRepository(ShoppingCart)
            const value = data.cartId
            let deleted
            await value.map(async (element: any) => {
                if (userId == data.userId) {
                    deleted = await cartRepository.delete({
                        productId: element,
                    })
                }
            })
            return res.status(203).json({ msg: 'Delete successfully' })
        } catch (error) {
            res.status(403).send(error)
            console.log(error)
        }
    }
}
