import { createSlice } from '@reduxjs/toolkit';

const cartSlice = createSlice({
  name: 'cart',
  initialState: [],
  reducers: {
    addToCart: (state, action) => {
      const productObj = action.payload;
      const product = state.find((stateObj) => productObj.id === stateObj.id);
      if (product) {
        product.qty++;
      } else {
        const obj = { ...action.payload, qty: 1 };
        state.push(obj);
      }
    },
    incrementItem: (state, action) => {
      const productObj = action.payload;
      const product = state.find((stateObj) => productObj.id === stateObj.id);
      product.qty++;
    },
    decrementItem: (state, action) => {
      const productObj = action.payload;
      const product = state.find((stateObj) => productObj.id === stateObj.id);
      if (product.qty === 1) product.qty = 1;
      else product.qty--;
    },
    clearState: (state) => {
      state = [];
    },
  },
});

export default cartSlice.reducer;

export const { addToCart, incrementItem, decrementItem, clearState } =
  cartSlice.actions;
