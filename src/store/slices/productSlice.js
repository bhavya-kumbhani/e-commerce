import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { del, get, post, put, thunkHandler } from "../../helpers/api/base";

const initialState = {
  productData: [],
  userLoader: false,
  allCategories: [],
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
  "/product/update",
  async (body, thunkAPI) => {
    let url = `products/${body.id}`;
    return thunkHandler(put(url, body.payload), thunkAPI);
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
    return thunkHandler(del(url), thunkAPI);
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
        state.productData = action?.payload;
      })
      .addCase(findAllProducts.rejected, (state) => {
        state.userLoader = false;
      })
      .addCase(addProduct.pending, (state) => {
        state.userLoader = true;
      })
      .addCase(addProduct.fulfilled, (state, action) => {
        state.userLoader = false;
        state.productData = {
          ...state.productData,
          data: [action.payload.data, ...state.productData.data],
        };
      })
      .addCase(addProduct.rejected, (state) => {
        state.userLoader = false;
      })
      .addCase(updateProduct.pending, (state) => {
        state.userLoader = true;
      })
      .addCase(updateProduct.fulfilled, (state, action) => {
        state.userLoader = false;
        state.productData = {
          ...state.productData,
          data: state.productData.data.map((item) => {
            if (item?.id === action.payload.data?.id) {
              return action.payload.data;
            }
            return item;
          }),
        };
      })
      .addCase(updateProduct.rejected, (state) => {
        state.userLoader = false;
      })
      .addCase(deleteProduct.pending, (state) => {
        state.userLoader = true;
      })
      .addCase(deleteProduct.fulfilled, (state, action) => {
        state.userLoader = false;
        state.productData = {
          ...state.productData,
          data: state.productData.data.filter(
            (item) => item?.id !== action?.payload?.data?.id
          ),
        };
      })
      .addCase(deleteProduct.rejected, (state) => {
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
