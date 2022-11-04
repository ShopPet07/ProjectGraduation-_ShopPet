import { Request, Response } from 'express'
import { Pets } from '../../entity/pets.entity'
import { AppDataSource } from '../../utils/data-source'
export class PetsController {
    static createPet = async (
        req: Request,
        res: Response
    ): Promise<Pets | any> => {
        const data = req.body
        const userId = Number(res.locals.jwtPayload.id)
        try {
            if (data?.price >= 0 && data?.number >= 0) {
                return res.status(400).json('Data invalid')
            }
            const petsRepository = AppDataSource.getRepository(Pets)
            const newPet = await petsRepository.save({
                ...data,
                userId: userId,
            })
            if (newPet) {
                return res.status(200).json(newPet)
            }
        } catch (error) {
            console.log(error)
        }
    }
}
