// Store is related to configuration for redux and it acts as a store for your redux state management

import { configureStore } from '@reduxjs/toolkit'
import productReducer from "../slices/productsSlice"
import cartReducer from "../slices/addToCartSlice"


export const store = configureStore({
  reducer: {
    "products": productReducer,
    "CartSlice":cartReducer,
  },
})

export type RootState = ReturnType<typeof store.getState>; 
export type AppDispatch = typeof store.dispatch;