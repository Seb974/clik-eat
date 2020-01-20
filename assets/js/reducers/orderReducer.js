import { GET_ORDERS, GET_ORDER, ADD_ORDER, DELETE_ORDER, UPDATE_ORDER } from '../actions/types';

const initialState = {
    orders: [],
    selected: {}
};
  
export default function(state = initialState, action) {
    switch (action.type) {
        case GET_ORDERS:
            console.log(action.payload);
            return {
                ...state,
                orders: action.payload,
            };
        case GET_ORDER:
            return {
                ...state,
                selected: action.payload
            };
        case ADD_ORDER:
            const enlargedOrders = [action.payload, ...state.orders];
            return {
                ...state,
                orders: enlargedOrders,
            };
        case DELETE_ORDER:
            const reducedOrders = state.orders.filter(order => order.id !== action.payload.id);
            return {
                ...state,
                orders: reducedOrders,
            };
        case UPDATE_ORDER:
            const previousOrders = state.orders.filter(order => order.id !== action.payload.id);
            return {
                ...state,
                orders: [action.payload, ...previousOrders],
            }

        default:
            return state;
    }
}