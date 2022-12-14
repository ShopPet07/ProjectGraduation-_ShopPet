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
    try {
        const authHeaders = <string>req.headers.authorization

        let token = authHeaders && authHeaders.split(' ')[1]
        console.log('Check token middleware ', token)
        if (token) {
            jwtPayload = <any>jwt.verify(token, config.get<string>('JWT_KEY'))
            res.locals.jwtPayload = jwtPayload
        } else {
            jwtPayload = jwt.verify(
                req.cookies['access_token'],
                config.get<string>('JWT_KEY')
            )
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
