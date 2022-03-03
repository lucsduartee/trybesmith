import { Response, Request, NextFunction } from 'express';
import HTTPStatusCode from '../Enums/HTTPStatusCode';
import Error from '../Interfaces/Error';

const errMiddleware = (err: Error, _: Request, res: Response, _n: NextFunction) => {
  if (err.code) return res.status(err.code).json({ error: err.error });

  res.status(HTTPStatusCode.INTERNAL_SERVER_ERROR).json({ error: 'Internal Server Error' });
};

export default errMiddleware;
