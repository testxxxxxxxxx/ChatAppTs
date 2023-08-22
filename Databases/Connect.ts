import mongoose, { Connection } from "mongoose";

namespace Databases
{
    class Connect 
    {
        public constructor(private uri: string, private dbName: string,private mongoose: any)
        {
            this.uri = uri;
            this.dbName = dbName;
            this.mongoose = mongoose;

        }

        public async connect(): Promise<typeof mongoose>
        {

            return await this.mongoose.connect(`${this.uri}/${this.dbName}`);
        }

    }

}