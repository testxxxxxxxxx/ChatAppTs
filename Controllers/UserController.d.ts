import { Request, Response } from 'express';
declare class UserController {
    static index(res: Response): Promise<void>;
    static show(req: Request, res: Response): Promise<void>;
    static create(req: Request, res: Response): Promise<void>;
    static update(req: Request, res: Response): Promise<void>;
    static delete(req: Request, res: Response): Promise<void>;
}
export default UserController;
