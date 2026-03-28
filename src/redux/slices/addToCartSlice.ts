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
        // If item added has a quantity of more than 1 then dont add the item and just add quantity 2
        // Action.payload is the specific item that is added in the cart page
        let alreadyInCart = false
        for(let i = 0; i < state.addToCart.length; i++){
          if(state.addToCart[i].id === action.payload.id){
            state.addToCart[i].quantity = state.addToCart[i].quantity + 1 
            state.addToCart[i].price = state.addToCart[i].price * state.addToCart[i].quantity 
            alreadyInCart = true
          }
        }
          if(alreadyInCart === false){
            state.addToCart.push({...action.payload,quantity:1})
          }
        

           // Need to compare the item in the array of add to cart to another item in the array of add to cart to see if they are the same


                

        state.cartCount = state.cartCount + 1
    }
  }
});

export const {actionAddToCart} = addToCartSlice.actions

export default addToCartSlice.reducer