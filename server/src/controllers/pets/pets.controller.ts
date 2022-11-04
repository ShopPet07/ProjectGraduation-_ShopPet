import { Request, Response } from 'express'
import { Pets } from '../../entity/pets.entity'
import { AppDataSource } from '../../utils/data-source'
export class PetsController {
    static CreatePost = async (
        req: Request,
        res: Response
    ): Promise<Pets | any> => {
        const data = req.body
        const userId = Number(res.locals.jwtPayload.id)
        try {
            if (data?.price >= 0 && data?.number >= 0) {
                const petsRepository = AppDataSource.getRepository(Pets)
                const newPet = await petsRepository.save({
                    ...data,
                    userId: userId,
                })
                console.log('Check pet:', newPet)
                if (newPet) {
                    return res.status(200).json(newPet)
                }
            } else res.status(401).json('Data invalid')
        } catch (error) {
            console.log(error)
        }
    }

    static UpdatePost = async (
        req: Request,
        res: Response
    ): Promise<String | any> => {
        const data = req.body
        const petId = Number(req.params.id)
        const userId = Number(res.locals.jwtPayload.id)
        try {
            const petsRepository = AppDataSource.getRepository(Pets)
            const pets: Pets | null = await petsRepository.findOne({
                where: { productId: petId },
            })
            if (pets!.userId === userId) {
                const updated = await petsRepository.update(pets!.productId, {
                    ...data,
                })
                // console.log('check update post', updated)
                return res
                    .status(200)
                    .json({ message: 'Update successful', data: updated })
            }
        } catch (error) {
            console.log(error)
        }
    }

    static DeletePost = async (req: Request, res: Response): Promise<void> => {
        const userId = Number(res.locals.jwtPayload.id)
        const postId = Number(req.params.id)
        try {
            const petsRepository = AppDataSource.getRepository(Pets)
            const pets = await petsRepository.findOne({
                where: { productId: postId },
            })
            if (pets!.userId === userId) {
                await petsRepository.delete(postId)
            }
            res.send('Delete Successfully')
        } catch (error) {
            console.log(error)
        }
    }

    static GetAll = async (
        req: Request,
        res: Response
    ): Promise<Pets[] | any> => {
        try {
            const petsRepository = AppDataSource.getRepository(Pets)
            const petsPost: Pets[] = await petsRepository.find()
            return res.status(200).json(petsPost)
        } catch (error) {
            console.log(error)
        }
    }

    static GetAllPetPost = async (
        req: Request,
        res: Response
    ): Promise<Pets[] | any> => {
        const userId: number = Number(res.locals.jwtPayload.id)
        const postId: number = Number(req.params.id)
        try {
            const petsRepository = AppDataSource.getRepository(Pets)
            const allPostInUser = await petsRepository.find({
                relations: {
                    user: true,
                },
                where: {
                    user: {
                        id: userId,
                    },
                },
            })
            console.log(allPostInUser)
        } catch (error) {
            console.log(error)
        }
    }
}
