// store.js
import { configureStore } from "@reduxjs/toolkit";
import thunk from "redux-thunk";
import reducers from "./reducers/index"; // Ensure correct path

const store = configureStore({
  reducer: reducers,
//   middleware: (getDefaultMiddleware) => {[...getDefaultMiddleware(), thunk]},
});

export default store;

