import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { del, get, patch, post, thunkHandler } from "../../helpers/api/base";

const initialState = {
  productData: [],
  userLoader: false,
  allCategories: [],
};
export const findAllProducts = createAsyncThunk(
  "/product/find-all",
  async (body, thunkAPI) => {
    let url = `products`;
    return thunkHandler(get(url), thunkAPI);
  }
);
export const getSingleProducts = createAsyncThunk(
  "/product/single-product",
  async (body, thunkAPI) => {
    let url = `products/${body.id}`;
    return thunkHandler(get(url), thunkAPI);
  }
);
export const getAllCategories = createAsyncThunk(
  "/product/category",
  async (body, thunkAPI) => {
    let url = `products/categories`;
    return thunkHandler(get(url), thunkAPI);
  }
);
export const updateProduct = createAsyncThunk(
  "/product/category",
  async (body, thunkAPI) => {
    let url = `products/${body.id}`;
    return thunkHandler(patch(url, body.payload), thunkAPI);
  }
);
export const addProduct = createAsyncThunk(
  "/product/add",
  async (body, thunkAPI) => {
    let url = `products`;
    return thunkHandler(post(url, body.payload), thunkAPI);
  }
);
export const deleteProduct = createAsyncThunk(
  "/product/delete",
  async (body, thunkAPI) => {
    let url = `products/${body.id}`;
    return thunkHandler(del(url,), thunkAPI);
  }
);

export const productSlice = createSlice({
  name: "product",
  initialState: initialState,
  reducers: {},
  extraReducers(builder) {
    builder
      .addCase(findAllProducts.pending, (state) => {
        state.userLoader = true;
      })
      .addCase(findAllProducts.fulfilled, (state, action) => {
        state.userLoader = false;
        state.productData = action?.payload?.data;
      })
      .addCase(findAllProducts.rejected, (state) => {
        state.userLoader = false;
      })
      .addCase(getAllCategories.pending, (state) => {
        state.userLoader = true;
      })
      .addCase(getAllCategories.fulfilled, (state, action) => {
        state.userLoader = false;
        state.allCategories = action?.payload?.data;
      })
      .addCase(getAllCategories.rejected, (state) => {
        state.userLoader = false;
      });
  },
});

export default productSlice;
