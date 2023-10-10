import { Request, Response } from 'express'
import EmailService from '../services/EmailServices'

const users = [{name: 'Vinícius', email: 'viih.fv76@gmail.com'}]

export default {
    async index(req: Request, res: Response){
        return res.json(users)
    },

    async create(req: Request, res:Response){
        const emailService = new EmailService()
        
        emailService.sendMail(
            { name: 'Vinicius', email: 'viih.fv76@gmail.com' },
            { subject: 'Bem-vindo ao sistema', body:'Seja bem-vindo'}
        )

        return res.send()    
    
    }
}