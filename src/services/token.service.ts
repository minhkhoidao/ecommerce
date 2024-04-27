import { TokenEntity } from '../entities/token.entity';
import { TokenRepository } from '../repositories/token.repository';

export namespace TokenService {
  export const CreateToken = async ({ userId, publicKey }: TokenEntity.CreateToken) => {
    return await TokenRepository.CreateToken({ userId, publicKey });
  };
}
