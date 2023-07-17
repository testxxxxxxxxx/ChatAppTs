import {Request,Response} from 'express';
import Services from '../Services/UserService.ts';
import LoginServices from '../Services/LoginService.ts';
import HashServices from '../Services/HashService.ts';
import UserServices from '../Services/UserService.ts';

namespace Controllers
{
    export class UserController
    {
        public static async login(req: Request,res: Response): Promise<void>
        {
            const hashService: HashServices.HashService = new HashServices.HashService();
            const userService: Services.UserService = new Services.UserService();
            const loginService: LoginServices.LoginService = new LoginServices.LoginService(userService,hashService);

            let message: string = "";
            const email: string = req.body.email;
            const password: string = req.body.password;

            if(await loginService.login(email,password))
            {
                req.session.user = loginService.email;

                res.redirect('../');

            }
            else
            {
                message="Login or password is not correct!";

                res.redirect('back');

            }

        }
        public static async show(req: Request,res: Response): Promise<void>
        {
            if(req.session.user)
            {
                res.render('index',{

                    message: "You have been sucessful logged in"

                });

            }
            else
            {
                res.render('index',{

                    message: "false"

                });

            }

        }
        public static async create(req: Request,res: Response): Promise<void>
        {
            const hashService: HashServices.HashService = new HashServices.HashService();
            const userService: UserServices.UserService = new UserServices.UserService();
            const loginService: LoginServices.LoginService = new LoginServices.LoginService(userService,hashService);

            const email: string = req.body.email;
            const password: string = req.body.password;


        }
        public static async update(req: Request,res: Response): Promise<void>
        {

        }
        public static async delete(req: Request,res: Response): Promise<void>
        {

        }

    }

}

export default Controllers;