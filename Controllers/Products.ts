import { Request, Response } from 'express';
import HTTPStatusCode from '../Enums/HTTPStatusCode';
import CustomError from '../Interfaces/Error';
import ProductsService from '../Services/Products';

async function create(
  req: Request,
  res: Response,
) {
  const product = req.body;
  const result = await ProductsService.createS(product);

  if ((result as CustomError).code) {
    return res.status((result as CustomError).code).json({ error: (result as CustomError).error });
  }

  return res.status(HTTPStatusCode.CREATED).json({ ...result });
}

async function getAll(
  _req: Request,
  res: Response,
) {
  const result = await ProductsService.getAll();

  return res.status(HTTPStatusCode.OK).json(result);
}

export default {
  create,
  getAll,
};
