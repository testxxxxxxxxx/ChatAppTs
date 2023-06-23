import mongoose, { Schema,Model, Connection } from "mongoose";
    
interface User
{
    login: String;
    password: String;

}

mongoose.connect('mongodb://localhost:27017/chatAppTs');

const userSchema: Schema = new mongoose.Schema<User>({login: String,password: String},{strict: false});

const User0: any = mongoose.model('User',userSchema);

export default User0;