import LoginInterfaces from "../Interfaces/LoginInterface.ts";
import UserServices from "./UserService.ts";
import HashServices from "./HashService.ts";

namespace LoginServices
{
    export class LoginService implements LoginInterfaces.LoginInterface
    {
        public email: string;

        public constructor(private userService: UserServices.UserService,private hashService: HashServices.HashService)
        {
            this.userService=userService;
            this.hashService=hashService;

        }

        public async login(login: string, password: string): Promise<boolean> 
        {    
            const finalPassword: any = await this.userService.getPassword(login); //hash password from database

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

            if(await this.userService.loginNotExist(login) && await this.userService.createUser(login,hashPassword))
            {
                this.email = login;

                return true;
            }

            return false;
        }

    }

}

export default LoginServices;