import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage/session"; //or session
import authSlice from "./slices/authSlice";
import productSlice from "./slices/productSlice";

const appReducer = combineReducers({
  auth: authSlice.reducer,
  product: productSlice.reducer
});

const persistConfig = {
  key: "root",
  storage,
  whitelist: ["auth"],
};
const rootReducer = (state, action) => {
  if (action.type === "auth/logout") {
    storage.removeItem("persist:root");
    localStorage.removeItem("persist:root");
    localStorage.removeItem("persist:reducer");
    return appReducer(undefined, action);
  }
  return appReducer(state, action);
};

const persistedReducer = persistReducer(persistConfig, rootReducer);
const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});

export const persistor = persistStore(store);
export default store;
