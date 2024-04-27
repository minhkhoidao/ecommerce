import mongoose, { Schema } from 'mongoose';
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
});

const ShopModel = mongoose.model('Shop', shopSchema);

export default ShopModel;
