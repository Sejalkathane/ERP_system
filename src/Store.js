// // store.js

import { configureStore } from "@reduxjs/toolkit";
import rootReducer from "./components/Reducer";
import rootReducerOrder from "./components/Reducerfol/OrderReducer";

const store = configureStore({
  reducer: {
    products: rootReducer,
    orders: rootReducerOrder,
  },
});

export default store;