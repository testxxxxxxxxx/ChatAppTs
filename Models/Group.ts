import mongoose, {Schema} from "mongoose";
import Databases from "../Databases/Connect.ts";

namespace GroupModel
{
    interface Group 
    {
        id: object;
        name: string;

    }

    Databases.Connect.connect('mongodb://172.17.0.6:27017/', 'chatAppTs');

    const groupSchema: Schema = new mongoose.Schema<Group>();

    export const Group: any = mongoose.model<Group>('Group',groupSchema);

}

export default GroupModel;