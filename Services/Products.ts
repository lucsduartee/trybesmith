import CustomError from '../Interfaces/Error';
import { InProduct, Item, ProductOrder } from '../Interfaces/Product';
import * as validations from '../Schemas/Products';
import ProductsModel from '../src/models/Product';

async function createS(product: InProduct): Promise<CustomError | Item | void> {
  if (validations.validateName(product)) return validations.validateName(product);
  if (validations.validateAmount(product)) return validations.validateAmount(product);

  const result = await ProductsModel.create(product);

  return {
    item: result,
  } as Item;
}

async function getAll(): Promise<ProductOrder[]> {
  const allProducs = await ProductsModel.getAll();

  return allProducs;
}

export default {
  createS,
  getAll,
};
