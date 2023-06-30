interface UserInterface 
{
    login(login: string,password: string): Promise<boolean>;
    register(login: string,password: string): Promise<boolean>;
    createUser(login: string,password: string): Promise<boolean>;
    getPassword(login: string): Promise<Promise<object>[]>;
    loginNotExist(login: string): Promise<boolean>; 

}

export default UserInterface;