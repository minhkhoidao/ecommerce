import bcrypt from 'bcrypt';
import { Roles } from '../constant';
import { AuthEntity } from '../entities/auth.entity';
import ShopModel from '../models/shop.model';

export namespace AuthRepository {
  export const Register = async (models: AuthEntity.Register) => {
    const holderShop = await ShopModel.findOne({ email: models.email }).lean();

    if (holderShop) {
      return {
        code: 'xxxx',
        message: 'Email already registered',
      };
    }
    const passwordHash = await bcrypt.hash(models.password, 10);
    const newShop = await ShopModel.create({
      ...models,
      password: passwordHash,
      roles: [Roles.ADMIN],
    });

    if (!newShop) {
      return {
        code: 'xxxx',
        message: 'Failed to register shop',
      };
    }
    // const { publicKey, privateKey } = crypto.generateKeyPairSync('rsa', {
    //   modulusLength: 4096,
    // });
    return newShop;
  };
}
