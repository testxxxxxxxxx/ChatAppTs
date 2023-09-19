import Messages from "../Models/Message.ts";

namespace MessageServices
{
    export class MessageService 
    {
        public async get(to: object): Promise<Promise<object>[]>
        {
            
            return await Messages.Message.findOne({to: to},{_id: 1,from: 1,content: 1}).lean().exec();
        }
        public async create(from: object, to: object, content: string): Promise<boolean>
        {
            const message: boolean = await Messages.Message.create({from: from,to: to,content: content});

            return message;
        }
        public async delete(id: object): Promise<boolean>
        {
            const message: boolean = await Messages.Message.delete({_id: id});

            return message;
        }

    }

}

export default MessageServices;