import mongoose, { Schema } from "mongoose";
    
interface User
{
    login: String;
    password: String;

}

try{

    mongoose.connect('mongodb://localhost:27017/chatAppTs');

}
catch(e)
{
    console.error();

}
finally
{
    console.log("Connected");

}

const userSchema: Schema = new mongoose.Schema<User>({login: String,password: String},{strict: false});

const User0: any = mongoose.model('User',userSchema);

export default User0;