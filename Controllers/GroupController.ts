import { Request,Response } from "express";
import GroupServices from "../Services/GroupService.ts";
import RequestValidators from "../Services/RequestValidatorService.ts";

namespace GroupControllers
{
    export class GroupController 
    {

        public static async index(): Promise<void>
        {

        }
        public static async show(req: Request,res: Response): Promise<void>
        {
            if(req.session.user && req.session.logIn)
            {
                const groupService: GroupServices.GroupService = new GroupServices.GroupService();
                const requestValidatorService: RequestValidators.RequestValidatorService = new RequestValidators.RequestValidatorService();

                const groupName: string = req.body.groupName;

                const dataIsValidated: boolean = requestValidatorService.checkName(groupName);

                if(!dataIsValidated)
                    res.redirect('back');

                const groupId: object = await groupService.getId(groupName);

                res.render('index',{

                    data: groupId

                });


            }
            else
                res.redirect('back');

        }
        public static async create(req: Request,res: Response): Promise<void>
        {

        }
        public static async update(req: Request,res: Response): Promise<void>
        {

        }
        public static async delete(req: Request,res: Response): Promise<void>
        {

        }

    }

}

export default GroupControllers;