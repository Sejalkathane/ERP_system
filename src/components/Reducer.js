import { ADD_PRODUCT, EDIT_PRODUCT, DELETE_PRODUCT } from './Action';

const initialState = {
  products: [
    { id: 1, name: "Product 1", category: "Category A", price: 10, stock: 20 },
    { id: 2, name: "Product 2", category: "Category B", price: 20, stock: 15 },
    { id: 3, name: "Product 3", category: "Category C", price: 15, stock: 30 },

  ],
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
