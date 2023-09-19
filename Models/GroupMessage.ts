import mongoose,{Schema, Model} from "mongoose";
import Databases from "../Databases/Connect.ts";

namespace GroupMessageModel
{
    interface GroupMessage
    {
        from: object;
        group_id: object;
        content: string;

    }

    Databases.Connect.connect('mongodb://172.17.0.6:27017', 'chatAppTs');

    const groupMessageSchema: Schema = new mongoose.Schema<GroupMessage>();

    export const GroupMessage: any = mongoose.model<GroupMessage>('GroupMessage', groupMessageSchema);

}

export default GroupMessageModel;