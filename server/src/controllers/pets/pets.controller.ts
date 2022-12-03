import { Request, Response } from 'express'
import { Pets } from '../../entity/pets.entity'
import { AppDataSource } from '../../utils/data-source'
export class PetsController {
    // create new post
    static CreatePost = async (
        req: Request,
        res: Response
    ): Promise<Pets | any> => {
        const data = req.body
        const image = req.file
        const userId = Number(res.locals.jwtPayload.id)

        try {
            // data.image = 'http://127.0.0.1:3000/images/' + req!.file!.filename

            if (data?.price >= 0 && data?.number >= 0) {
                const petsRepository = AppDataSource.getRepository(Pets)
                const newPet = await petsRepository.save({
                    ...data,
                    image,
                    userId: userId,
                })
                // console.log('Check pet:', newPet)
                if (newPet) {
                    return res.status(200).json(newPet)
                }
            } else res.status(401).json('Data invalid')
        } catch (error) {
            res.status(500).send(error)
            return
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
                const updated: Pets | any = await petsRepository.update(
                    pets!.productId,
                    {
                        ...data,
                    }
                )
                return res
                    .status(200)
                    .json({ message: 'Update successful', data: updated })
            }
        } catch (error) {
            res.status(500).send(error)
            return
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
            res.status(500).send(error)
            return
        }
    }

    static GetAll = async (
        req: Request,
        res: Response
    ): Promise<Pets[] | any> => {
        const page = Number(req.query.page as any) || 1
        const take: number = 12

        try {
            const petsRepository = AppDataSource.getRepository(Pets)
            const total = await petsRepository.count()
            let options = {}
            const petsPost: Pets[] | any = await petsRepository.find({
                ...options,
                take,
                skip: (page - 1) * take,
            })
            return res.status(200).json({
                petsPost,
                total,
                page,
                lastPage: Math.ceil(total / take),
            })
        } catch (error) {
            res.status(500).send(error)
            return
        }
    }

    // static GetItemBySearch = async (
    //     req: Request,
    //     res: Response
    // ): Promise<Pets[] | any> => {
    //     let { searchQuery }: any = req.query
    //     try {
    //         searchQuery = new RegExp(searchQuery, 'i')
    //         const pets = await AppDataSource.getRepository(Pets)
    //             .createQueryBuilder('pet')
    //             .where(
    //                 'pet.title Like :title AND pet.description Like :description',
    //                 { title: `%${searchQuery}%` }
    //             )
    //             .getMany()
    //         res.status(200).json(pets)
    //     } catch (error) {
    //         res.status(500).send(error)
    //     }
    // }
}
