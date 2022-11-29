import { NextFunction, Request, Response } from 'express'
import jwt from 'jsonwebtoken'
import config from 'config'
// import { decode } from 'punycode';
export const VerifyToken = async (
    req: Request,
    res: Response,
    next: NextFunction
) => {
    let jwtPayload
    let decodeData
    try {
        const token: string = req.cookies['access_token']
        // console.log('Check token middleware ', token)
        if (token) {
            jwtPayload = <any>jwt.verify(token, config.get<string>('JWT_KEY'))
            res.locals.jwtPayload = jwtPayload
        } else {
            decodeData = jwt.decode(token)
            res.locals.jwtPayload = decodeData?.sub
        }
    } catch (error) {
        res.status(401).send()
        return
    }

    //The token is valid for 1 hour
    //We want to send a new token on every request
    const { id, email, username } = jwtPayload
    // console.log(jwtPayload)
    const newToken = jwt.sign(
        { id, email, username },
        config.get<string>('JWT_KEY'),
        {
            expiresIn: '1h',
        }
    )
    res.setHeader('token', newToken)

    //Call the next middleware or controller
    next()
}
