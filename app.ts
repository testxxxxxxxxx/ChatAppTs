import express,{ Express,Router,Request,Response } from 'express';
import cookieParser from 'cookie-parser';
import sessions from 'express-session';
import hbs from 'hbs';
import path from 'path';
import bodyParser from 'body-parser';
import { fileURLToPath } from 'url';
import UserController from './Controllers/UserController.ts';

const router: Router = express.Router();

const __filename: string = fileURLToPath(import.meta.url);
const __dirname: string = path.dirname(__filename);

const app: Express = express();

app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());
app.use(sessions({

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

app.get('/',(req: Request,res: Response): void =>{

    UserController.index(res);

});

app.listen(5000,(): void=>{

    console.log("Serwer działa!");

});