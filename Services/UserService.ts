import User0 from "../Models/User.ts";
import UserInterface from '../Interfaces/UserInterface.ts';
import { Model } from "mongoose";

class UserService implements UserInterface
{
    public async login(login: string,password: string): Promise<boolean>
    {
        const result: any = await this.getPassword(login);

        console.log(result.password);

        return false;
    }
    public async register(login: string,password: string,salt: number): Promise<boolean>
    {

        return false;
    }
    public async createUser(login: string,password: string): Promise<boolean>
    {
        const result: Promise<boolean> = await User0.create({login: login,password: password});

        return result;
    }
    public async getPassword(login: string): Promise<Promise<object>[]> 
    {

        return await User0.findOne({login: login},{password: 1}).lean().exec();    
    }
    public async loginNotExist(login: string): Promise<boolean>
    {
        const result: number = await User0.findOne({login: login}).count().exec();

        if(result>0)
            return false;

        return true;
    }

}

export default UserService;