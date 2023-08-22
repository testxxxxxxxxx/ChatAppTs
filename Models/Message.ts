import mongoose, { Schema } from "mongoose";

namespace Messages
{

    interface Message 
    {
        content: string,
        from: string,
        to: string,
        group_id: number

    }

    try{

        mongoose.connect('mongodb://172.17.0.6:27017/chatAppTs');

    }
    catch(e)
    {
        console.error(e);

    }
    finally
    {
        console.log("Message connected!");

    }

    const messageSchema: Schema = new mongoose.Schema<Message>();

    export const Message: any = mongoose.model<Message>('Message',messageSchema);

}

export default Messages;