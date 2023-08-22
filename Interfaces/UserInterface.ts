interface UserInterface 
{
    createUser(login: string,password: string): Promise<boolean>;
    getPassword(login: string): Promise<Promise<object>[]>;
    loginNotExist(login: string): Promise<boolean>;
    changePassword(email: string,newPassword: string): Promise<boolean>;
    deleteUser(email: string): Promise<boolean>; 

}

export default UserInterface;