import MessageInterfaces from "../Interfaces/MessageInterface.ts"

namespace GroupMessageServices
{
    export class GroupMessageService implements MessageInterfaces.MessageInterface
    {
        async get(to: object): Promise<Promise<object>[]>
        {

            return [];
        }
        async create(from: object, to: object, content: string): Promise<boolean>
        {

            return false; 
        }
        async delete(id: object): Promise<boolean>
        {

            return false;
        }

    }

}

export default GroupMessageServices;