import User0 from "../Models/User.ts";
import UserInterface from '../Interfaces/UserInterface.ts';

namespace UserServices
{
    export class UserService implements UserInterface
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
        public async getId(login: string): Promise<Promise<object>[]>
        {

            return await User0.findOne({login: login},{_id: 1});
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
        public async changePassword(email: string,newPassword: string): Promise<boolean> 
        {
            const result: boolean = await User0.updateOne({login: email},{$set: {password: newPassword}});

            if(!result)
                return false;

            return true;
        }
        public async deleteUser(email: string): Promise<boolean>
        {
            const result: boolean = await User0.delete({login: email})

            if(!result && !this.loginNotExist(email))
                return false;

            return true;
        }

    }

}

export default UserServices;