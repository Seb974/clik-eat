import { GET_ORDERS, GET_ORDER, ADD_ORDER, DELETE_ORDER, UPDATE_ORDER, SEND_TO_DELIVERY, CLOSE_ORDER } from '../actions/types';

const initialState = {
    orders: [],
    selected: {}
};
  
export default function(state = initialState, action) {
    switch (action.type) {
        case GET_ORDERS:
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
            console.log(action.payload.order);
            let newOrder = action.payload.order;
            newOrder.paymentDateTime = Date.now();
            const enlargedOrders = [newOrder, ...state.orders].sort((a, b) => (a.id > b.id) ? 1 : -1);
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
        case SEND_TO_DELIVERY:
        case CLOSE_ORDER:
            const previousOrders = state.orders.filter(order => order.id !== action.payload.id);
            return {
                ...state,
                orders: [action.payload, ...previousOrders].sort((a, b) => (a.id > b.id) ? 1 : -1),
            }

        default:
            return state;
    }
}