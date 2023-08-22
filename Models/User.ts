import mongoose, { Schema } from "mongoose";
    
interface User
{
    login: string;
    password: string;

}

try{

    mongoose.connect('mongodb://172.17.0.6:27017/chatAppTs');

}
catch(e)
{
    console.error();

}
finally
{
    console.log("Connected");

}

const userSchema: Schema = new mongoose.Schema<User>({login: {type: String, required: true},password: {type: String, required: true}},{strict: false});

const User0: any = mongoose.model<User>('User',userSchema);

export default User0;