import crypto from 'crypto';
import { NextFunction, Request, Response } from 'express';
import { uuid } from 'uuidv4';
import { AuthService } from '../services/auth.service';
import { TokenService } from '../services/token.service';
import { GenerateToken } from '../utils/generateToken';

export namespace AuthController {
  export const register = async (req: Request, res: Response, next: NextFunction) => {
    // Register a new user
    try {
      const { email, password, name } = req.body;
      const result = await AuthService.Register({
        email,
        password,
        name,
        id: uuid(),
      });
      if (result && 'id' in result) {
        const { publicKey, privateKey } = crypto.generateKeyPairSync('rsa', {
          modulusLength: 4096,
        });
        const userId = result.id;
        const publicKeyString = await TokenService.CreateToken({
          userId: userId,
          publicKey: publicKey.toString(),
        });

        if (!publicKeyString) {
          res.status(401).json({
            message: 'Invalid Token',
          });
        }

        const token = await GenerateToken({ userId: userId }, publicKeyString, privateKey);
        return res.status(201).json({
          message: 'Register success',
          data: {
            token,
          },
        });
      }
      return res.status(400).json({
        message: 'Register failed',
        statusCode: 400,
      });
    } catch (error) {
      next(error);
    }
  };
}

export default AuthController;
