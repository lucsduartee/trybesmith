import { Router } from 'express';
import rescue from 'express-rescue';
import create from '../Controllers/User';

const router = Router();

router.post('/', rescue(create));

export default router;

// import { Router, Request, Response } from 'express';
// import createS from '../Services/User';
// import HTTPStatusCode from '../Enums/HTTPStatusCode';
// import { User } from '../Interfaces/User';
// import Error from '../Interfaces/Error';

// const router = Router();

// router.post('/', async (
//   req: Request,
//   res: Response,
// ): Promise<Response> => {
//   const user: User = req.body;
//   const re = await createS(user);

//   if ((re as Error).code) res.status((re as Error).code).json({ error: (re as Error).error });

//   return res.status(HTTPStatusCode.OK).json('eaee');
// });

// export default router;