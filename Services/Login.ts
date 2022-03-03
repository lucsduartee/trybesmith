import { Login, LoginData } from '../Interfaces/Login';
import * as Validations from '../Schemas/LoginSchema';
import CustomError from '../Interfaces/Error';
import login from '../src/models/Login';
import { UserCreated } from '../Interfaces/User';

export default async function loginS(loginData: LoginData):
Promise<Login | CustomError | undefined> {
  if (Validations.validateUsername(loginData)) return Validations.validateUsername(loginData);
  if (Validations.validatePassword(loginData)) return Validations.validatePassword(loginData);
  
  const result = await login(loginData);

  if ((result as CustomError).code) return result as CustomError;

  const { id, username } = result as UserCreated;

  return {
    id,
    username,
  } as Login;
}
