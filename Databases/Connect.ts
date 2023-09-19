import mongoose from "mongoose";

namespace Databases
{
    export class Connect 
    {
        public static async connect(uri: string, dbName: string): Promise<void>
        {
            try{

                await mongoose.connect(`${uri}/${dbName}`);

            }
            catch(e)
            {
                console.log(e);

            }
            finally
            {
                console.log("Connected");

            }
            
        }

    }

}

export default Databases;