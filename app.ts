import express,{ Express,Router,Request,Response } from 'express';
import hbs from 'hbs';
import path from 'path';
import bodyParser from 'body-parser';
import { fileURLToPath } from 'url';
import MessageController from './Controllers/MessageController.ts';

const router: Router = express.Router();

const __filename: string = fileURLToPath(import.meta.url);
const __dirname: string = path.dirname(__filename);

const app: Express = express();

app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());
app.set('views','./Views');
hbs.registerPartials(path.join(__dirname,'./Views/Partials'));
app.set('view engine','hbs');

app.get('/',(req: Request,res: Response): void =>{

    MessageController.show(res);

});

app.listen(5000,(): void=>{

    console.log("Serwer działa!");

});