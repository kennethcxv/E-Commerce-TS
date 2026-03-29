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
            alreadyInCart = true
          }
        }
          if(alreadyInCart === false){
            state.addToCart.push({...action.payload,quantity:1})
          } 
            state.cartCount = state.cartCount + 1
    },
    actionIncrementQuantity:(state,action) => {
      for(let i = 0; i < state.addToCart.length; i++){
        console.log("This is action.payload",action.payload)
        if(state.addToCart[i].id === action.payload){
          console.log("Increment Quantity is running")
            state.addToCart[i].quantity = state.addToCart[i].quantity + 1 

          }
        // We loop over and trying to find the item we are going to find the quantity of
          
        }
          state.cartCount = state.cartCount + 1

    },
    actionDecrementQuantity:(state,action) => {
      // We need to have a map
      state.addToCart = state.addToCart.map((item) => {
        if(item.id === action.payload){  
          console.log("Decrement Quantity is running")
            item.quantity = item.quantity - 1
        }
        return item
      })
      state.cartCount = state.cartCount - 1
          state.addToCart = state.addToCart.filter((item) => {
            return item.quantity > 0
            // We need to use this filter since it returns an empty array so we push the entire array except for the id we
          })
    
                    // We need to remove an item from an array. We can use filter 
          // Filter gives you an empty array 
        // We loop over and trying to find the item we are going to find the quantity of
    },

    
  }
});

export const {actionAddToCart, actionIncrementQuantity,actionDecrementQuantity} = addToCartSlice.actions

export default addToCartSlice.reducer