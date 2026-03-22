// rx slice is a good shortcut to get the template of a slice file

import { createSlice } from '@reduxjs/toolkit'
import { createAsyncThunk } from '@reduxjs/toolkit';
// import type { PayloadAction } from '@reduxjs/toolkit';
import type { Product } from '../../types/Product';
import axios from 'axios';

export const fetchProducts = createAsyncThunk("products/fetchProducts", async() => {
    const data = await axios.get("https://fakestoreapi.com/products")
    return data.data
})


interface initialStateType{
    products:Product[]
}

const initialState:initialStateType = {
    // State Variables
    products:[],
}

const productsSlice = createSlice({
  name: "products",
  initialState,
  reducers: {

  },
    extraReducers:(builder) => { // All async behaviors should go in here
        builder.addCase(fetchProducts.pending, () => { 
        })
        .addCase(fetchProducts.fulfilled, (state, action:PayloadAction<Product[]>) => { 
            state.products = action.payload
        })
        .addCase(fetchProducts.rejected, () => { 
            console.log("Api request failed")
        })
    }
})

export const {} = productsSlice.actions

export default productsSlice.reducer