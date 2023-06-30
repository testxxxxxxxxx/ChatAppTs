import UserInterface from "../Interfaces/UserInterface.ts";
import UserService from "./UserService.ts";

class LoginService implements UserInterface
{
    public constructor(private userService: UserService)
    {
        this.userService=userService;

    }

    public async login(login: string, password: string): Promise<boolean> 
    {    

        return false;
    }
    public async register(login: string, password: string): Promise<boolean> 
    {
        if(await this.loginNotExist(login) && await this.createUser(login,password))
            return true;

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

}