// actions/orderActions.js
export const ADD_ORDER = 'ADD_ORDER';
export const EDIT_ORDER = 'EDIT_ORDER';
export const DELETE_ORDER = 'DELETE_ORDER';

export const addOrder = (order) => ({
  type: ADD_ORDER,
  payload: order,
});

export const editOrder = (orderId, updatedOrder) => ({
  type: EDIT_ORDER,
  payload: { orderId, updatedOrder },
});

export const deleteOrder = (orderId) => ({
  type: DELETE_ORDER,
  payload: orderId,
});
