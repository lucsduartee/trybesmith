import { RowDataPacket } from 'mysql2';
import { LoginData } from '../../Interfaces/Login';
import { UserCreated } from '../../Interfaces/User';
import CustomError from '../../Interfaces/Error';
import connection from './connection';
import HTTPStatusCode from '../../Enums/HTTPStatusCode';
import Messages from '../../Enums/Messages';

export default async function login(loginData: LoginData): Promise<UserCreated | CustomError> {
  const { username, password } = loginData;
  const query = `SELECT * FROM Trybesmith.Users
    WHERE username = ? AND password = ?`;
  
  const [[result]] = await connection.execute<RowDataPacket[]>(query, [username, password]);

  if (!result) {
    return {
      code: HTTPStatusCode.UNAUTHORIZED,
      error: Messages.USER_PASSWORD,
    };
  }
  
  return result as UserCreated;
}
