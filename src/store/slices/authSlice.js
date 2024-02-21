import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  userInfo: {},
  signUpUserData: [],
};

export const authSlice = createSlice({
  name: "auth",
  initialState: initialState,
  reducers: {
    setUserInfo(state, action) {
      state.userInfo = action.payload;
    },
    setSignUpUserData(state, action) {
      state.signUpUserData = [...state.signUpUserData, action.payload];
    },
  },
});
export const { setUserInfo, setSignUpUserData } = authSlice.actions;

export default authSlice;
