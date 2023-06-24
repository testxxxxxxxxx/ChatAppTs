import User0 from "../Models/User.ts";
import UserInterface from '../Interfaces/UserInterface.ts';

class UserService implements UserInterface
{
    public async login(login: string,password: string): Promise<boolean>
    {
        const result: object = await this.getPassword(login);

        console.log(result);

        return false;
    }
    public async register(login: string,password: string): Promise<boolean>
    {
        const result: boolean = await User0.create({login: login,password: password});

        return result;
    }
    public async getPassword(login: string): Promise<object> 
    {

        return await User0.findOne({login: login}).select('password').exec();    
    }

}

export default UserService;