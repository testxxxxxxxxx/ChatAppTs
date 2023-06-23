import { Collection } from "mongoose";

interface UserInterface 
{
    login(login: string,password: string): Promise<boolean>;
    register(login: string,password: string): Promise<boolean>;
    getPassword(login: string): Promise<any>;

}

export default UserInterface;