import { sign } from 'jsonwebtoken';
import dotenv from 'dotenv';
import { User } from '../Interfaces/User';
import { Login } from '../Interfaces/Login';

dotenv.config();

const auth = {
  secret: String(process.env.JWT_SECRET),
  expires: '1d',
};

export default function generateTKN(user: User | Login): string {
  return sign(user, '12SD49KSMO984U', { expiresIn: auth.expires });
}
