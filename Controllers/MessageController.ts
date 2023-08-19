import { Request, Response } from "express";
import UserServices from "../Services/UserService.ts";
import MessageServices from "../Services/MessageService.ts";
import RequestValidators from "../Services/RequestValidatorService.ts";

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
                const messageService: MessageServices.MessageService = new MessageServices.MessageService();

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
            if(req.session.user && req.session.logIn)
            {
                const userService: UserServices.UserService = new UserServices.UserService();
                const messageService: MessageServices.MessageService = new MessageServices.MessageService();
                const requestValidatorService: RequestValidators.RequestValidatorService = new RequestValidators.RequestValidatorService();

                const emailTo: string = req.body.emailTo;
                const content: string = req.body.content;
                const groupId: object = req.body.groupId;
                const userId: any = req.session.userId;

                const dataIsValidated: boolean = requestValidatorService.checkEmail(emailTo) && requestValidatorService.checkContent(content) && requestValidatorService.checkId(groupId) && requestValidatorService.checkId(userId);

                if(!dataIsValidated)
                    res.redirect('back');

                const userTo: object = await userService.getId(emailTo);

                const messageIsCreated: boolean = await messageService.create(userId,userTo,content,groupId);

                if(!messageIsCreated)
                    res.redirect('back');

                res.redirect('home');
            }
            else
                res.redirect('back');

        }
        public static async delete(req: Request,res: Response): Promise<void>
        {
            if(req.session.user && req.session.logIn)
            {
                const messageService: MessageServices.MessageService = new MessageServices.MessageService();
                const requestValidatorService: RequestValidators.RequestValidatorService = new RequestValidators.RequestValidatorService();

                const messageId: object = req.body.messageId;

                const dataIsValidated: boolean = requestValidatorService.checkId(messageId);

                if(!dataIsValidated)
                    res.redirect('back');

                const messageIdDeleted: boolean = await messageService.delete(messageId);

                if(!messageIdDeleted)
                    res.redirect('back');

                res.redirect('home');
            }
            else
                res.redirect('back');
            
        }

    }

}

export default MessageControllers;