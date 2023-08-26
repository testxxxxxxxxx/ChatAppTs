import GroupModel from "../Models/Group.ts"

namespace GroupServices
{
    export class GroupService 
    {
        public async getAll(): Promise<object>
        {
            const result: object = await GroupModel.Group.find().exec();

            return result;
        }
        public async getId(name: string): Promise<object>
        {
            const result: object = await GroupModel.Group.findOne({name: name},{_id: 1}).exec(); 

            return result;
        }
        public async getName(id: object): Promise<object>
        {
            const result: object = await GroupModel.Group.findOne({_id: id},{name: 1}).exec();

            return result;
        }
        public async create(name: string): Promise<boolean>
        {
            const result: boolean = await GroupModel.Group.create({name: name}).exec();

            return result;
        }
        public async update(name: string,newName: string): Promise<boolean>
        {
            const result: boolean = await GroupModel.Group.updateOne({name: name},{$set: {name: newName}}).exec();

            return result;
        }
        public async delete(id: object): Promise<boolean>
        {
            const result: boolean = await GroupModel.Group.deleteOne({_id: id}).exec();

            return result;
        }

    }

}

export default GroupServices;