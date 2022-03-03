import { Request, Response } from 'express';
import CustomError from '../Interfaces/Error';
import loginS from '../Services/Login';
import generateTKN from '../Auth';
import HTTPStatusCode from '../Enums/HTTPStatusCode';
import { Login } from '../Interfaces/Login';

export default async function loginC(
  req: Request,
  res: Response,
) {
  const loginData = req.body;

  const re = await loginS(loginData);

  if ((re as CustomError).code) {
    return res.status((re as CustomError).code).json({ error: (re as CustomError).error });
  }

  const token = generateTKN(re as Login);
  
  return res.status(HTTPStatusCode.OK).json({ token });
}