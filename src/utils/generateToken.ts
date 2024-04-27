import jwt from 'jsonwebtoken';

interface Payload {
  [key: string]: any;
}

export const GenerateToken = async (payload: Payload, publicKey: any, privateKey: any) => {
  try {
    const accessToken = await jwt.sign(payload, privateKey, {
      algorithm: 'RS256',
      expiresIn: '2 days',
    });
    const refreshToken = await jwt.sign(payload, privateKey, {
      algorithm: 'RS256',
      expiresIn: '7 days',
    });

    jwt.verify(accessToken, publicKey, (err: any, decode: any) => {
      if (err) throw new Error('Invalid Token');
      console.log(decode), 'token';
    });

    return {
      accessToken,
      refreshToken,
    };
  } catch (error) {
    return error;
  }
};
