import { Router } from 'express';
// import rescue from 'express-rescue';
import loginC from '../Controllers/Login';

const routerL = Router();

routerL.post('/', loginC);

export default routerL;
