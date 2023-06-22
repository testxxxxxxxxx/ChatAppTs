import {Request,Response} from 'express';
import User0 from '../Models/User.js';

class UserController
{
    public static async index(res: Response): Promise<void>
    {
        res.render('index',{

            text: await User0.find().exec()

        });

    }
    public static async show(req: Request,res: Response): Promise<void>
    {

    }
    public static async create(req: Request,res: Response): Promise<void>
    {

    }
    public static async update(req: Request,res: Response): Promise<void>
    {

    }
    public static async delete(req: Request,res: Response): Promise<void>
    {

    }

}

export default UserController;