import {Request,Response} from 'express';
import UserService from '../Services/UserService.ts';

class UserController
{
    public static async index(res: Response): Promise<void>
    {
        const userService: UserService = new UserService();

        res.render('index',{

            text: await userService.login('Test','example')

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