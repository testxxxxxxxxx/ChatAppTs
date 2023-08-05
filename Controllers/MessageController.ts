import { Request, Response } from "express";
import UserServices from "../Services/UserService.ts";
import MessageServices from "../Services/MessageService.ts";

namespace MessageControllers
{
    export class MessageController
    {

        public static async index(req: Request,res: Response): Promise<void>
        {

        }
        public static async show(req: Request,res: Response): Promise<void>
        {
            if(req.session.user && req.session.logIn)
            {
                const userService: UserServices.UserService = new UserServices.UserService();
                const messageService: MessageServices.MessageService = new MessageServices.MessageService(userService);

                const userId: object[] = await userService.getId(req.session.user);
                const message: object[] = await messageService.get(userId);

                res.render('index',{

                    data: message

                });

            }
            else
                res.redirect('back');

        }
        public static async create(req: Request,res: Response): Promise<void>
        {

        }
        public static async delete(req: Request,res: Response): Promise<void>
        {

        }

    }

}

export default MessageControllers;