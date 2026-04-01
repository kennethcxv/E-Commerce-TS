// rx slice is a good shortcut to get the template of a slice file

import { createSlice, type PayloadAction } from "@reduxjs/toolkit";
import { createAsyncThunk } from "@reduxjs/toolkit";
// import type { PayloadAction } from '@reduxjs/toolkit';
import type { Product } from "../../types/Product";
import type { NewProduct } from "../../types/NewProduct";
import axios from "axios";

export const fetchProducts = createAsyncThunk(
  "products/fetchProducts",
  async () => {
    const data = await axios.get("https://fakestoreapi.com/products");
    console.log("This is the api call", data.data)
    return data.data; // In the builder it is recieved as action.payload
  },
);

export const fetchNewProducts = createAsyncThunk(
  "products/fetchNewProducts",
  async () => {
    const data = await axios.get("https://api.escuelajs.co/api/v1/products");
    console.log("This is the api call", data.data)
    return data.data; // In the builder it is recieved as action.payload
  },
);

interface initialStateType {
  products: Product[];
  filteredProducts: Product[];
  newProducts:NewProduct[];
  filteredNewProducts:NewProduct[];
}

const initialState: initialStateType = {
  // State Variables
  products: [],
  filteredProducts: [],
  newProducts: [],
  filteredNewProducts: [],
};

const productsSlice = createSlice({
  name: "products",
  initialState,
  reducers: {
    searchProducts: (state, action) => {
      console.log(action.payload, "This is action.payload");
      console.log(action, "This is the data Receieved in redux");
      state.filteredProducts = state.products.filter((item) => {
        return item.title.toLowerCase().includes(action.payload.toLowerCase());
      });
    },
  },
  
  extraReducers: (builder) => {
    // All async behaviors should go in here
    builder
      .addCase(fetchProducts.pending, () => {})
      .addCase(
        fetchProducts.fulfilled,
        (state, action: PayloadAction<Product[]>) => {
          state.products = action.payload;
          state.filteredProducts = action.payload; // Action.payload is the data that comes when the action is triggered
        },
      )
      .addCase(fetchProducts.rejected, () => {
        console.log("Api request failed");
      });
        builder
      .addCase(fetchNewProducts.pending, () => {})
      .addCase(
        fetchNewProducts.fulfilled,
        (state, action: PayloadAction<NewProduct[]>) => {
          state.newProducts = action.payload;
          state.filteredNewProducts = action.payload; // Action.payload is the data that comes when the action is triggered
        },
      )
      .addCase(fetchNewProducts.rejected, () => {
        console.log("Api request failed");
      });
  },
});

export const { searchProducts } = productsSlice.actions;

export default productsSlice.reducer;