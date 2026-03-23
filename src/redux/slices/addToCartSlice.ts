import { createSlice } from '@reduxjs/toolkit'
import type { Product } from "../../types/Product";

interface CartState {
  addToCart: Product[];
  cartCount:number;
}

const initialState:CartState = {
    addToCart: [],
    cartCount:0,
}

const addToCartSlice = createSlice({
  name: "CartSlice",
  initialState,
  reducers: {
    actionAddToCart:(state,action) => {
        state.addToCart.push(action.payload)
        state.cartCount = state.cartCount + 1
        console.log("Add to cart2",action.payload)
    }
  }
});

export const {actionAddToCart} = addToCartSlice.actions

export default addToCartSlice.reducer