// reducers/orderReducer.js

import { ADD_ORDER, EDIT_ORDER, DELETE_ORDER } from '../Actionfol/OrderAction';

const initialState = {
  orders: [
    { id: 1, customerName: 'John Doe', orderDate: '2024-01-01', status: 'Pending' },
    { id: 2, customerName: 'Jane Smith', orderDate: '2024-01-02', status: 'Shipped' },
    { id: 3, customerName: 'Alice Johnson', orderDate: '2024-01-03', status: 'Completed' },

  ],
};

const orderReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_ORDER:
      return {
        ...state,
        orders: [...state.orders, action.payload],
      };
    case EDIT_ORDER:
      return {
        ...state,
        orders: state.orders.map(order =>
          order.id === action.payload.orderId ? action.payload.updatedOrder : order
        ),
      };
    case DELETE_ORDER:
      return {
        ...state,
        orders: state.orders.filter(order => order.id !== action.payload),
      };
    default:
      return state;
  }
};

export default orderReducer;
