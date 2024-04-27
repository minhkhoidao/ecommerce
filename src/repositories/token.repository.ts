import { TokenEntity } from '../entities/token.entity';
import tokenModel from '../models/token.model';

export namespace TokenRepository {
  export const CreateToken = async ({ userId, publicKey }: TokenEntity.CreateToken) => {
    try {
      const publicKeyString = publicKey.toString();

      const token = await tokenModel.create({
        user: userId,
        publicKey: publicKeyString,
      });
      return token;
    } catch (error) {
      return error;
    }
  };
}
