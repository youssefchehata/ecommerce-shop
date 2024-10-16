import { createSlice } from '@reduxjs/toolkit';
import { updateCart } from '../utils/cartUtils';

const initialState = localStorage.getItem('cart') ? JSON.parse(localStorage.getItem('cart')) : { cartItems: [] ,shippingAddress: {}, paymentMethod: 'PayPal' };


const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addToCart: (state, action) => {
      const item = action.payload;
      // check if item already exist in cart
      const existItem = state.cartItems.find( (cartItem) => cartItem._id === item._id );
      if (existItem) {
        state.cartItems = state.cartItems.map((el) => el._id === item._id ? item : el );
      } else {
        state.cartItems = [...state.cartItems, item];
      }
   return   updateCart(state);
    },
    removeFromCart: (state, action) => {
      state.cartItems = state.cartItems.filter((el) => el._id !== action.payload);
      return updateCart(state);
    },
    saveShippingAddress: (state, action) => {
      state.shippingAddress = action.payload;
      return updateCart(state);
    },
    savePaymentMethod:(state , action)=>{
      state.paymentMethod = action.payload
      return updateCart(state);
    },
    clearCartItems: (state) => {
      state.cartItems = [];
      return updateCart(state);
    },
   
  },
});
 export const { addToCart, removeFromCart , saveShippingAddress , savePaymentMethod , clearCartItems} = cartSlice.actions;
export default cartSlice.reducer;
