import {Request,Response} from 'express';
import User0 from '../Models/User.ts';

class MessageController
{
    public static async show(res: Response): Promise<void>
    {
        res.render('index',{

            text: await User0.find().exec()

        });

    }

}

export default MessageController;