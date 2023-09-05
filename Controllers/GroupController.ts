import { Request,Response } from "express";
import GroupServices from "../Services/GroupService.ts";
import RequestValidators from "../Services/RequestValidatorService.ts";

namespace GroupControllers
{
    export class GroupController 
    {

        public static async index(req: Request,res: Response): Promise<void>
        {
            if(req.session.user && req.session.logIn)
            {
                const groupService: GroupServices.GroupService = new GroupServices.GroupService();

                const groups: object = await groupService.getAll();

                res.render('index',{

                    data: groups

                });

            }
            else
                res.redirect('back');

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
            if(req.session.user && req.session.logIn)
            {
                const groupService: GroupServices.GroupService = new GroupServices.GroupService();
                const requestValidatorService: RequestValidators.RequestValidatorService = new RequestValidators.RequestValidatorService();

                const groupName: string = req.body.groupName;

                const dataIsValidated: boolean = requestValidatorService.checkName(groupName);

                if(!dataIsValidated)
                    res.redirect('back');

                const groupIsCreated: boolean = await groupService.create(groupName);

                if(!groupIsCreated)
                    res.redirect('back');

                res.redirect('/home');
            }
            else
                res.redirect('back');

        }
        public static async update(req: Request,res: Response): Promise<void>
        {
            if(req.session.user && req.session.logIn)
            {
                const groupService: GroupServices.GroupService = new GroupServices.GroupService();
                const requestValidatorService: RequestValidators.RequestValidatorService = new RequestValidators.RequestValidatorService();

                const groupId: object = req.body.groupId;
                const newGroupName: string = req.body.groupName;

                const dataIsValidated: boolean = requestValidatorService.checkId(groupId) && requestValidatorService.checkName(newGroupName);

                if(!dataIsValidated)
                    res.redirect('back');

                const groupIsUpdated: boolean = await groupService.update(groupId,newGroupName);

                if(!groupIsUpdated)
                    res.redirect('back');

                res.redirect('/home');
            }
            else
                res.redirect('back');

        }
        public static async delete(req: Request,res: Response): Promise<void>
        {
            if(req.session.user && req.session.logIn)
            {
                const groupService: GroupServices.GroupService = new GroupServices.GroupService();
                const requestValidatorService: RequestValidators.RequestValidatorService = new RequestValidators.RequestValidatorService();

                const groupId: object = req.body.groupId;

                const dataIsValidated: boolean = requestValidatorService.checkId(groupId);

                if(!dataIsValidated)
                    res.redirect('back');

                const groupIsDeleted: boolean = await groupService.delete(groupId);

                if(!groupIsDeleted)
                    res.redirect('back');

                res.redirect('/home');
            }
            else
                res.redirect('back');

        }

    }

}

export default GroupControllers;