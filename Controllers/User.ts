import { Request, Response } from 'express';
import createS from '../Services/User';
import HTTPStatusCode from '../Enums/HTTPStatusCode';
import { User, UserCreated } from '../Interfaces/User';
import Error from '../Interfaces/Error';
import generateTKN from '../Auth';

export default async function create(
  req: Request,
  res: Response,
): Promise<void> {
  const user: User = req.body;
  const re = await createS(user);

  if ((re as Error).code) res.status((re as Error).code).json({ error: (re as Error).error });

  const token = generateTKN(re as UserCreated);
  res.status(HTTPStatusCode.CREATED).json({ token });
}