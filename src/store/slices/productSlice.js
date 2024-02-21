import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { get, thunkHandler } from "../../helpers/api/base";

const initialState = {
  productData: [],
  userLoader: false,
};
export const findAllProducts = createAsyncThunk(
  "/product/find-all",
  async (body, thunkAPI) => {
    let query = "";
    for (let key in body) {
      query += `${key}=${body[key]}&`;
    }
    query = query.slice(0, -1);
    let url = `products?${query}`;
    return thunkHandler(get(url), thunkAPI);
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
      });
  },
});

export default productSlice;
