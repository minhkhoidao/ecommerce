import { Schema } from 'mongoose';

export namespace TokenEntity {
  export interface CreateToken {
    userId?: string;
    publicKey: string;
  }
}
