import { ResultSetHeader } from 'mysql2';
import connection from './connection';
import { User } from '../../Interfaces/User';

export default async function create(user: User): Promise<number | false> {
  try {
    const { username, classe, level, password } = user;
    const query = `INSERT INTO Trybesmith.Users
      (username, classe, level, password)
      VALUES (?, ?, ?, ?)`;
  
    const [data] = await connection
      .execute<ResultSetHeader>(query, [username, classe, level, password]);
    
    const { insertId: id } = data;
    
    return id;
  } catch (err) {
    return false;
  }
}
