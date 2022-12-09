import { Request, Response } from 'express'
import nodemailer from 'nodemailer'
import config from 'config'
export class SendMail {
    static SendMailForgotPasswor = async (data: any) => {
        // console.log(data.randomNewPasword)
        let transporter = nodemailer.createTransport({
            host: 'smtp.gmail.com',
            port: 587,
            secure: false, // true for 465, false for other ports
            auth: {
                user: config.get<string>('MAIL_APP'), // generated ethereal user
                pass: config.get<string>('MAIL_APP_PASSWORD'), // generated ethereal password
            },
        })

        // send mail with defined transport object
        let info = await transporter.sendMail({
            from: '"ADMIN" <dtramuyen@gmaill.com>', // sender address
            to: data.email, // list of receivers
            subject: 'New Password', // Subject line
            text: data.randomNewPasword, // plain text body
            html: `<b>New Password is:  ${data.randomNewPasword} </b>`, // html body
        })
        // console.log('check forgot pass:', data.randomNewPasword)
        return info
    }
}