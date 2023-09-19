import mongoose, { Schema } from "mongoose";
import Databases from "../Databases/Connect.ts";

namespace Messages
{

    interface Message 
    {
        content: string,
        from: string,
        to: string,
        group_id: number

    }

    Databases.Connect.connect('mongodb://172.17.0.6:27017', 'chatAppTs');

    const messageSchema: Schema = new mongoose.Schema<Message>();

    export const Message: any = mongoose.model<Message>('Message',messageSchema);

}

export default Messages;