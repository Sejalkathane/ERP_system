import {configureStore} from "@reduxjs/toolkit";
import rootReducer from "./components/Reducer"

const store =configureStore({
    reducer:rootReducer,
  });
  

export default store