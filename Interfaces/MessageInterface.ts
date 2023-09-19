namespace MessageInterfaces
{
    export interface MessageInterface
    {
        get(to: object): Promise<Promise<object>[]>;
        create(from: object, to: object, content: string): Promise<boolean>;
        delete(id: object): Promise<boolean>;

    }

}

export default MessageInterfaces;