import UserInterface from "../Interfaces/UserInterface.ts";
import UserServices from "./UserService.ts";
import HashServices from "./HashService.ts";

namespace LoginServices
{
    export class LoginService implements UserInterface
    {
        public email: string;

        public constructor(private userService: UserServices.UserService,private hashService: HashServices.HashService)
        {
            this.userService=userService;
            this.hashService=hashService;

        }

        public async login(login: string, password: string): Promise<boolean> 
        {    
            const finalPassword: any = await this.getPassword(login); //hash password from database

            if(finalPassword===null)
                return false;

            const passwordsAreNotDiffrent: boolean = await this.hashService.compare(password,finalPassword.password);

            if(!passwordsAreNotDiffrent)
                return false;

            this.email = login;

            return true;
        }
        public async register(login: string, password: string,salt: number): Promise<boolean> 
        {
            const hashPassword: string = await this.hashService.getHash(password,10);

            if(await this.loginNotExist(login) && await this.createUser(login,hashPassword))
            {
                this.email = login;

                return true;
            }

            return false;
        }
        public async createUser(login: string, password: string): Promise<boolean> 
        {
            
            return await this.userService.createUser(login,password);
        }
        public async getPassword(login: string): Promise<Promise<object>[]> 
        {
            
            return await this.userService.getPassword(login);
        }
        public async loginNotExist(login: string): Promise<boolean> 
        {
        
            return await this.userService.loginNotExist(login);
        }
        public async changePassword(email: string,newPassword: string): Promise<boolean> 
        {
            
            return false;
        }
        public async deleteUser(email: string): Promise<boolean> 
        {
            
            return false;
        }

    }

}

export default LoginServices;