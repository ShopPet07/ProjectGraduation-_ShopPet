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
<<<<<<< HEAD
        const authHeaders = await (<string>req.headers.authorization)
=======
        const authHeaders = <string>req.headers.authorization
>>>>>>> 26e0fe8880be69b6faf3d59cc2f553a2fad25d73
        // console.log('CHeck auth token:', authHeaders)
        // console.log('Check req:', req!.headers)
        let token = authHeaders && authHeaders.split(' ')[1]
        console.log('Check token middleware ', token)
        if (token) {
            jwtPayload = <any>jwt.verify(token, config.get<string>('JWT_KEY'))
            res.locals.jwtPayload = jwtPayload
<<<<<<< HEAD
        } else {
            jwtPayload = jwt.verify(
                req.cookies['access_token'],
                config.get<string>('JWT_KEY')
            )
=======
>>>>>>> 26e0fe8880be69b6faf3d59cc2f553a2fad25d73
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
