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
        // console.log(authHeaders)
        let token = authHeaders && authHeaders.split(' ')[1]
        // console.log('Check token middleware ', token)
        if (token) {
            jwtPayload = <any>jwt.verify(token, config.get<string>('JWT_KEY'))
            res.locals.jwtPayload = jwtPayload
        }
        // console.log(jwtPayload)
    } catch (error) {
        res.status(401).send(error)
        console.log(error)
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
