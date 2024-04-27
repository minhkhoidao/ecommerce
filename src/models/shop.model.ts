import mongoose, { Schema } from 'mongoose';

interface IShop extends Document {
  name: string;
  email: string;
  password: string;
  status: 'active' | 'inactive';
  verify: boolean;
  roles: any[];
  id: string;
}
// Declare the Schema of the Mongo model
const shopSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    unique: true,
    index: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
  },
  status: {
    type: String,
    default: 'inactive',
    enum: ['active', 'inactive'],
  },
  verify: {
    type: Schema.Types.Boolean,
    default: false,
  },
  roles: {
    type: Array,
    default: [],
  },
  id: {
    type: String,
    required: true,
  },
});

const ShopModel = mongoose.model<IShop>('Shop', shopSchema);

export default ShopModel;
