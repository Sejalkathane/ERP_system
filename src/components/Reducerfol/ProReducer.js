// rootReducer.js

import { ADD_PRODUCT, EDIT_PRODUCT, DELETE_PRODUCT } from '../Actionfol/ProAction';
import initialProducts from '../Products/InitialProducts'; // Import initial products data

const initialState = {
  products: initialProducts, // Use the imported initial products data
};

const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_PRODUCT:
      return {
        ...state,
        products: [...state.products, action.payload],
      };
    case EDIT_PRODUCT:
      return {
        ...state,
        products: state.products.map(product =>
          product.id === action.payload.productId ? action.payload.updatedProduct : product
        ),
      };
    case DELETE_PRODUCT:
      return {
        ...state,
        products: state.products.filter(product => product.id !== action.payload),
      };
    default:
      return state;
  }
};

export default rootReducer;
