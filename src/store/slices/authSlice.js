import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { post, thunkHandler } from "../../helpers/api/base";

const initialState = {
  user: {},
  authLoader: false,
  isLoggedIn: false,
  errorSignIn: false,
  status: "idle",
  error: null,
};

export const signIn = createAsyncThunk(
  "/user/signIn",
  async (body, thunkAPI) => {
    return thunkHandler(post(`auth/login`, body), thunkAPI);
  }
);
export const signUp = createAsyncThunk(
  "/user/signUp",
  async (body, thunkAPI) => {
    return thunkHandler(post(`auth/signUp`, body), thunkAPI);
  }
);

export const authSlice = createSlice({
  name: "auth",
  initialState: initialState,
  reducers: {
   
  },
  extraReducers(builder) {
    builder
      .addCase(signIn.pending, (state) => {
        state.status = "loading";
        state.authLoader = true;
      })
      .addCase(signIn.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.authLoader = false;
        state.isLoggedIn = true;
        state.user = action?.payload?.data?.data;
      })
      .addCase(signIn.rejected, (state) => {
        state.status = "rejected";
        state.authLoader = false;
      })
      .addCase(signUp.pending, (state) => {
        state.status = "loading";
        state.authLoader = true;
      })
      .addCase(signUp.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.authLoader = false;
        state.isLoggedIn = true;
        state.user = action?.payload?.data?.user;
      })
      .addCase(signUp.rejected, (state) => {
        state.status = "rejected";
        state.authLoader = false;
      })
  },
});
export default authSlice;
