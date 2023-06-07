import {Request,Response} from 'express';
import User from '../Models/User.ts';

class MessageController
{
    public static show(res: Response): void
    {
        let user: User=new User(1,'users');

        let login: Promise<any>=user.getLogin(1);

        res.render('index',{

            text: login

        });

    }

}

export default MessageController;