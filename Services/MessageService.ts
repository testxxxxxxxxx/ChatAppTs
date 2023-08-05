import Messages from "../Models/Message.ts";
import UserServices from "./UserService.ts";

namespace MessageServices
{
    export class MessageService 
    {
        public constructor(private userService: UserServices.UserService)
        {
            this.userService=userService;

        }

        public async get(to: object): Promise<Promise<object>[]>
        {
            
            return await Messages.Message.findOne({to: to},{_id: 1,from: 1,content: 1,group_id: 1}).lean().exec();
        }
        public async create(from: string,to: string,content: string,groupId: number): Promise<boolean>
        {
            const message: boolean = await Messages.Message.create({from: from,to: to,content: content,group_id: groupId});

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