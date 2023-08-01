import express,{ Express,Router,Request,Response, request } from 'express';
import cookieParser from 'cookie-parser';
import session from 'express-session';
import hbs from 'hbs';
import path from 'path';
import bodyParser from 'body-parser';
import { fileURLToPath } from 'url';
import UserControllers from './Controllers/UserController.ts';
import MessageControllers from './Controllers/MessageController.ts';

declare module 'express-session' {

    export interface SessionData {

        user: string;

    }

}

const router: Router = express.Router();

const __filename: string = fileURLToPath(import.meta.url);
const __dirname: string = path.dirname(__filename);

const app: Express = express();

app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());
app.set('trust proxy',1);
app.use(session({

    secret: 'user',
    saveUninitialized: true,
    cookie: {maxAge: 3600},
    resave: false

}));
app.use(express.json());
app.use(express.urlencoded({extended: true}))
app.set('views','./Views');
app.use(express.static(__dirname));
app.use(cookieParser());
hbs.registerPartials(path.join(__dirname,'./Views/Partials'));
app.set('view engine','hbs');
app.use('/',router);

app.get('/home',(req: Request,res: Response): void => {

    UserControllers.UserController.show(req,res);

});
router.post('/login',(req: Request,res: Response): void => {

    UserControllers.UserController.login(req,res);

});
router.post('/register',(req: Request,res: Response): void => {

    UserControllers.UserController.create(req,res);

});
router.post('/changePassword',(req: Request,res: Response): void => {

    UserControllers.UserController.update(req,res);

});
router.post('/deleteUser',(req: Request,res: Response): void => {

    UserControllers.UserController.delete(req,res);

});

app.listen(5000,(): void=>{

    console.log("Serwer działa!");

});