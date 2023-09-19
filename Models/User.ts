import mongoose, { Schema } from "mongoose";
import Databases from "../Databases/Connect.ts";
    
interface User
{
    login: string;
    password: string;

}

Databases.Connect.connect('mongodb://172.17.0.6:27017', 'chatAppTs');

const userSchema: Schema = new mongoose.Schema<User>({login: {type: String, required: true},password: {type: String, required: true}},{strict: false});

const User0: any = mongoose.model<User>('User',userSchema);

export default User0;