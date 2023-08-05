import {Request,Response} from 'express';
import Services from '../Services/UserService.ts';
import LoginServices from '../Services/LoginService.ts';
import HashServices from '../Services/HashService.ts';
import UserServices from '../Services/UserService.ts';
import RequestValidators from '../Services/RequestValidatorService.ts';
import session from 'express-session';

namespace UserControllers
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
                req.session.userId = await userService.getId(loginService.email);
                req.session.logIn = true;

                res.redirect('/home');
            }
            else
            {
                message="Login or password is not correct!";

                res.redirect('back');
            }

        }
        public static async show(req: Request,res: Response): Promise<void>
        {
            if(req.session.user && req.session.logIn && req.session.userId)
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
            const requestValidatorService: RequestValidators.RequestValidatorService = new RequestValidators.RequestValidatorService();

            const email: string = req.body.email;
            const password: string = req.body.password;

            const checkRegex: boolean = requestValidatorService.checkEmail(email) && requestValidatorService.checkPassword(password);

            if(!checkRegex)
                res.redirect('back');

            const isRegistered: boolean = await loginService.register(email,password,10);

            if(!isRegistered)
                res.redirect('back');

            res.redirect('/home');
        }
        public static async update(req: Request,res: Response): Promise<void>
        {
            const userService: UserServices.UserService = new UserServices.UserService();
            const requestValidatorService: RequestValidators.RequestValidatorService = new RequestValidators.RequestValidatorService();

            const email: string = req.body.email;
            const newPassword: string = req.body.newPassword;

            const checkRegex: boolean = requestValidatorService.checkEmail(email) && requestValidatorService.checkPassword(newPassword);

            if(!checkRegex)
                res.redirect('back');

            const isChanged: boolean = await userService.changePassword(email,newPassword);

            if(!isChanged)
                res.redirect('back');

            res.redirect('/home');
        }
        public static async delete(req: Request,res: Response): Promise<void>
        {
            const userService: UserServices.UserService = new UserServices.UserService();
            const requestValidatorService: RequestValidators.RequestValidatorService = new RequestValidators.RequestValidatorService();

            const email: string = req.body.email;

            const checkRegex: boolean = requestValidatorService.checkEmail(email);

            if(!checkRegex)
                res.redirect('back');

            const isDeleted: boolean = await userService.deleteUser(email);

            if(!isDeleted)
                res.redirect('back');

            res.redirect('/home');
        }

    }

}

export default UserControllers;