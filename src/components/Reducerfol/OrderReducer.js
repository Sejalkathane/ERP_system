import { ADD_ORDER, EDIT_ORDER, DELETE_ORDER } from '../Actionfol/OrderAction';
import ordersInitialState from '../Order/OrderInitialstate'; // Import initial state

const initialState = {
  orders: ordersInitialState,
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
