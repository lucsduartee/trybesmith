import HTTPStatusCode from '../Enums/HTTPStatusCode';
import Messages from '../Enums/Messages';
import Error from '../Interfaces/Error';
import { InProduct } from '../Interfaces/Product';

function isUndefined(value: undefined | string | number): boolean {
  if (value === 0) return false;
  return !value;
}

function isString(value: string): boolean {
  return typeof value === 'string';
}

function isValidLength(value: string | number, length: number): boolean {
  return value.toString().length > length;
}

export function validateName(product: InProduct): Error | void {
  switch (true) {
    case isUndefined(product.name):
      return {
        code: HTTPStatusCode.BAD_REQUEST,
        error: Messages.NAME_REQUIRED,
      };
    case !isString(product.name):
      return {
        code: HTTPStatusCode.UNPROCESSABLE,
        error: Messages.NAME_MUSTBE_STRING,
      };
    case !isValidLength(product.name, 2):
      return {
        code: HTTPStatusCode.UNPROCESSABLE,
        error: Messages.NAME_VALID_LENGTH,
      };
    default: break;
  }
}

export function validateAmount(product: InProduct): Error | void {
  switch (true) {
    case isUndefined(product.amount):
      return {
        code: HTTPStatusCode.BAD_REQUEST,
        error: Messages.AMOUNT_REQUIRED,
      };
    case !isString(product.amount):
      return {
        code: HTTPStatusCode.UNPROCESSABLE,
        error: Messages.AMOUNT_MUSTBE_STRING,
      };
    case !isValidLength(product.amount, 2):
      return {
        code: HTTPStatusCode.UNPROCESSABLE,
        error: Messages.AMOUNT_VALID_LENGTH,
      };
    default: break;
  }
}