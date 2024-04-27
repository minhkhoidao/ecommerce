import { Schema } from 'mongoose';
import mongoose from 'mongoose';

interface IToken extends Document {
  userId: Schema.Types.ObjectId;
  publicKey: string;
  refreshToken: any[];
}

// Declare the Schema of the Mongo model
const tokenSchema = new mongoose.Schema({
  userId: {
    type: String,
    required: true,
    ref: 'Shop',
  },
  publicKey: {
    type: String,
    required: true,
  },
  refreshToken: {
    type: Array,
    default: [],
  },
});

//Export the model
const tokenModel = mongoose.model<IToken>('Token', tokenSchema);

export default tokenModel;
