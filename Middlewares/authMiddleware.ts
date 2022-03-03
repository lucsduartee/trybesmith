import { Request, Response, NextFunction } from 'express';
import jwt from 'jsonwebtoken';
import HTTPStatusCode from '../Enums/HTTPStatusCode';
import Messages from '../Enums/Messages';

export default (req: Request, res: Response, next: NextFunction) => {
  const { authorization } = req.headers;
  
  if (!authorization) {
    return res.status(HTTPStatusCode.UNAUTHORIZED).json({ error: Messages.TKN_NTF });
  }

  try {
    jwt.verify(authorization, '12SD49KSMO984U');
    
    next();
  } catch (_err) {
    return res.status(HTTPStatusCode.UNAUTHORIZED).json({ error: Messages.TKN_INVALID });
  }
};
