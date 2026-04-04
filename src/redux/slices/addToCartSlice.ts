import { createSlice } from '@reduxjs/toolkit'
import type { CartItem } from '../../types/CartItems';

interface CartState {
  addToCart: CartItem[];
  cartCount:number;
  cartTotal:number;
}

const initialState:CartState = {
    addToCart: [],
    cartTotal:0,
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
            state.cartTotal = parseFloat((state.cartTotal + action.payload.price).toFixed(3))   
          },
    actionIncrementQuantity:(state,action) => {
      state.addToCart = state.addToCart.map((item) => {
        if(item.id === action.payload){  
          
          console.log("Increment Quantity is running")
            item.quantity = item.quantity + 1
            state.cartTotal = parseFloat((state.cartTotal + item.price).toFixed(3))
        }
        return item
      })
        // We loop over and trying to find the item we are going to find the quantity of
          state.cartCount = state.cartCount + 1


    },
    actionDecrementQuantity:(state,action) => {
      // We need to have a map
      state.addToCart = state.addToCart.map((item) => {
        if(item.id === action.payload){  
          console.log("Decrement Quantity is running")
            item.quantity = item.quantity - 1
            state.cartTotal = parseFloat((state.cartTotal - item.price).toFixed(3))

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
        actionDeleteItem:(state,action) => {
          // We have the id of the item we want to delete now we neeed to make it so that if the button is pressed it filters it out
          state.addToCart = state.addToCart.filter((item) => {
            if(item.id === action.payload){
               state.cartTotal = parseFloat(( state.cartTotal - (item.price * item.quantity) ).toFixed(3))
               state.cartCount = state.cartCount - item.quantity
            }
            return item.id !== action.payload
          })

          
          // on Delete button makes deletes the quantity for cart cont
          // We grab the cart item id and then the quantity set to that id then subtract that to the cart count on delete

        },
        actionPlaceOrder:(state,action) => {
          console.log(state)
          console.log("This is place order", action.payload)
        }
  }
});

export const {actionAddToCart, actionIncrementQuantity,actionDecrementQuantity,actionDeleteItem,actionPlaceOrder} = addToCartSlice.actions

export default addToCartSlice.reducer