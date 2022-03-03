import HTTPStatusCode from '../Enums/HTTPStatusCode';
import Messages from '../Enums/Messages';
import CustomError from '../Interfaces/Error';
import { LoginData } from '../Interfaces/Login';

function isUndefined(value: undefined | string | number): boolean {
  if (value === 0) return false;
  return !value;
}

// function isString(value: string): boolean {
//   return typeof value === 'string';
// }

// function isValidLength(value: string | number, length: number): boolean {
//   return value.toString().length > length;
// }

export function validateUsername(user: LoginData): CustomError | undefined {
  switch (true) {
    case isUndefined(user.username):
      return {
        code: HTTPStatusCode.BAD_REQUEST,
        error: Messages.USERNAME_REQUIRED,
      };
    default: break;
  }
}

export function validatePassword(user: LoginData): CustomError | undefined {
  switch (true) {
    case isUndefined(user.password):
      return {
        code: HTTPStatusCode.BAD_REQUEST,
        error: Messages.PASSWORD_REQUIRED,
      };
    default: break;
  }
}