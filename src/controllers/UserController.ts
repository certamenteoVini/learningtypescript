import { Request, Response } from 'express'

const users = [{name: 'Vinícius', email: 'viih.fv76@gmail.com'}]

export default {
    async index(req: Request, res: Response){
        return res.json(users)
    }
}