import Error from '../Interfaces/Error';
import { User, UserCreated } from '../Interfaces/User';
import create from '../src/models/User';
import * as Validations from '../Schemas/UserSchema';

async function createS(user: User): Promise<UserCreated | Error | undefined> {  
  if (Validations.validateUsername(user)) return Validations.validateUsername(user);
  if (Validations.validateClass(user)) return Validations.validateClass(user);
  if (Validations.validateLevel(user)) return Validations.validateLevel(user);
  if (Validations.validatePassword(user)) return Validations.validatePassword(user);

  const id = await create(user);
  
  return {
    id,
    ...user,
  } as UserCreated;
}

export default createS;
