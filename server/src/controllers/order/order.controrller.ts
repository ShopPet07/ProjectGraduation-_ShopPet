import { Request, Response } from "express";

export class OrderController {
    static OrderProduct = async (req: Request, res: Response) => {
        const recipientId: number = Number(res.locals.jwtPayload.id)
        const productId = req.body.cartId
    try {
        
    } catch (error) {
        res.status(403).send(error)
        return
    }
    }
}