import mongoose from 'mongoose';

const Schema = mongoose.Schema;

const orderSchema = new Schema({
  user: {
    type: Schema.Types.ObjectId,
    required: true,
    ref: 'User',
  },
  orderItems: [
      {
        name: { type: String, required: true },
        price: { type: Number, required: true },
        qty: { type: Number, required: true },
        image: { type: String, required: true },
        product: { type: Schema.Types.ObjectId, required: true, ref: 'Product', },
      }
             ], 

  totalPrice: { type: Number, required: true, },
  shippingAddress: {
       address    : { type: String, required: true, },
       city       : { type: String, required: true, },
       postalCode : { type: String, required: true, },
       contry     : { type: String, required: true, },
    
    },
  paymentMethod: { type: String, required: true, },
  paymentReceipt: {
    id           : { type: String, required: true, },
    status       : { type: String, required: true, },
    update_time  : { type: String, required: true, },
    email_address: { type: String, required: true, },
   },
   itemPrice :{ type: Number, required: true, default: 0.00 },
   taxPrice  : { type: Number, required: true, default: 0.00 },
   shippingPrice : { type: Number, required: true, default: 0.00 },
   totalPrice: { type: Number, required: true, default: 0.00 },
   isPaid: { type: Boolean, required: true, default: false },
   paidAt: { type: Date, required: true, default: Date.now },
   isDelivered: { type: Boolean, required: true, default: false },


}, { timestamps: true });

const Order = mongoose.model('Order', orderSchema);

export default Order;