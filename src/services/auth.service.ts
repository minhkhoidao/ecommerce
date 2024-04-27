import { AuthEntity } from '../entities/auth.entity';
import { AuthRepository } from '../repositories/auth.repository';

export namespace AuthService {
  export const Register = async (body: AuthEntity.Register) => {
    return await AuthRepository.Register(body);
  };
}
