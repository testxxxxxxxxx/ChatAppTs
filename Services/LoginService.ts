import UserInterface from "../Interfaces/UserInterface.ts";
import UserService from "./UserService.ts";
import HashService from "./HashService.ts";

class LoginService implements UserInterface
{
    public constructor(private userService: UserService,private hashService: HashService)
    {
        this.userService=userService;
        this.hashService=hashService;

    }

    public async login(login: string, password: string): Promise<boolean> 
    {    
        const finalPassword: any = await this.getPassword(login);

        const passwordsAreNotDiffrent: boolean = await this.hashService.compare(password,finalPassword.password);

        if(!passwordsAreNotDiffrent)
            return false;

        return true;
    }
    public async register(login: string, password: string,salt: number): Promise<boolean> 
    {
        const hashPassword: string = await this.hashService.getHash(password,10);

        if(await this.loginNotExist(login) && await this.createUser(login,hashPassword))
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

export default LoginService;