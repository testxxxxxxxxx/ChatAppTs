import mongoose from "mongoose";

class User 
{
    private id: number;
    private login: string;
    private password: string;
    private table: string;

    public constructor(id: number,table: string)
    {
        this.id=id;
        this.table=table;

        mongoose.connect('mongodb://localhost:27017/chatAppTs');

        this.login="Test";
        this.password="";

    }

    public async getLogin(id: number): Promise<any>
    {

    }
    public getPassword(): any
    {
        
    }

}

export default User;