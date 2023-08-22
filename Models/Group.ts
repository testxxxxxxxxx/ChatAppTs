import mongoose, {Schema} from "mongoose";

namespace GroupModel
{
    interface Group 
    {
        id: object;
        name: string;

    }

    try{

        mongoose.connect('mongodb://172.17.0.6:27017/chatAppTs');

    }
    catch(e)
    {
        console.error(e);

    }
    finally
    {
        console.log("Group connected");

    }

    const groupSchema: Schema = new mongoose.Schema<Group>();

    export const Group: any = mongoose.model<Group>('Group',groupSchema);

}

export default GroupModel;