import HTTPStatusCode from '../Enums/HTTPStatusCode';
import Messages from '../Enums/Messages';
import Error from '../Interfaces/Error';
import { User } from '../Interfaces/User';

function isUndefined(value: undefined | string | number): boolean {
  if (value === 0) return false;
  return !value;
}

function isNumber(value: number): boolean {
  return typeof value === 'number';
}

function isString(value: string): boolean {
  return typeof value === 'string';
}

function isValidLength(value: string | number, length: number): boolean {
  return value.toString().length > length;
}

function greaterThanZero(value: number): boolean {
  return value > 0;
}

export function validateUsername(user: User): Error | undefined {
  switch (true) {
    case isUndefined(user.username):
      return {
        code: HTTPStatusCode.BAD_REQUEST,
        error: Messages.USERNAME_REQUIRED,
      };
    case !isString(user.username):
      return {
        code: HTTPStatusCode.UNPROCESSABLE,
        error: Messages.USERNAME_MUSTBE_STRING,
      };
    case !isValidLength(user.username, 2):
      return {
        code: HTTPStatusCode.UNPROCESSABLE,
        error: Messages.USERNAME_VALID_LENGTH,
      };
    default: break;
  }
}

export function validateClass(user: User): Error | undefined {
  switch (true) {
    case isUndefined(user.classe):
      return {
        code: HTTPStatusCode.BAD_REQUEST,
        error: Messages.CLASSE_REQUIRED,
      };
    case !isString(user.classe):
      return {
        code: HTTPStatusCode.UNPROCESSABLE,
        error: Messages.CLASSE_MUSTBE_STRING,
      };
    case !isValidLength(user.classe, 2):
      return {
        code: HTTPStatusCode.UNPROCESSABLE,
        error: Messages.CLASSE_VALID_LENGTH,
      };
    default: break;
  }
}

export function validateLevel(user: User): Error | undefined {
  switch (true) {
    case isUndefined(user.level):
      return {
        code: HTTPStatusCode.BAD_REQUEST,
        error: Messages.LEVEL_REQUIRED,
      };
    case !isNumber(user.level):
      return {
        code: HTTPStatusCode.UNPROCESSABLE,
        error: Messages.LEVEL_MUSTBE_NUMBER,
      };
    case !greaterThanZero(user.level):
      return {
        code: HTTPStatusCode.UNPROCESSABLE,
        error: Messages.LEVEL_VALID,
      };
    default: break;
  }
}

export function validatePassword(user: User): Error | undefined {
  switch (true) {
    case isUndefined(user.password):
      return {
        code: HTTPStatusCode.BAD_REQUEST,
        error: Messages.PASSWORD_REQUIRED,
      };
    case !isString(user.password):
      return {
        code: HTTPStatusCode.UNPROCESSABLE,
        error: Messages.PASSWORD_MUSTBE_STRING,
      };
    case !isValidLength(user.password, 7):
      return {
        code: HTTPStatusCode.UNPROCESSABLE,
        error: Messages.PASSWORD_VALID_LENGTH,
      };
    default: break;
  }
}
