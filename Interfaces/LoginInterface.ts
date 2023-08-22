namespace LoginInterfaces
{
    export interface LoginInterface
    {
        login(login: string,password: string): Promise<boolean>;
        register(login: string,password: string,salt: number): Promise<boolean>;

    }

}

export default LoginInterfaces;