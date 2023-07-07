import {Request,Response} from 'express';
import UserService from '../Services/UserService.ts';
import LoginService from '../Services/LoginService.ts';
import HashService from '../Services/HashService.ts';

class UserController
{
    public static async index(res: Response): Promise<void>
    {
        const hashService: HashService = new HashService();
        const userService: UserService = new UserService();
        const loginService: LoginService = new LoginService(userService,hashService);

        res.render('index',{

            text: await loginService.login("Test_1","Password_1")

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