import { GET_ORDERS, GET_ORDER, ADD_ORDER, DELETE_ORDER, UPDATE_ORDER, SEND_TO_DELIVERY, CLOSE_ORDER, ORDER_LOADING } from '../actions/types';

const initialState = {
    orders: [],
    selected: {},
    isLoading: false,
};
  
export default function(state = initialState, action) {
    switch (action.type) {
        case ORDER_LOADING:
            return {
            ...state,
            isLoading: true,
            };
        case GET_ORDERS:
            return {
                ...state,
                orders: action.payload,
                isLoading: false,
            };
        case GET_ORDER:
            return {
                ...state,
                selected: action.payload,
                isLoading: false,
            };
        case ADD_ORDER:
            let newOrder = action.payload.order;
            newOrder.paymentDateTime = Date.now();
            const enlargedOrders = [newOrder, ...state.orders].sort((a, b) => (a.id > b.id) ? 1 : -1);
            return {
                ...state,
                orders: enlargedOrders,
                isLoading: false,
            };
        case DELETE_ORDER:
            const reducedOrders = state.orders.filter(order => order.id !== action.payload.id);
            return {
                ...state,
                orders: reducedOrders,
                isLoading: false,
            };
        case UPDATE_ORDER:
        case SEND_TO_DELIVERY:
        case CLOSE_ORDER:
            const previousOrders = state.orders.filter(order => order.id !== action.payload.order.id);
            return {
                ...state,
                orders: [action.payload.order, ...previousOrders].sort((a, b) => (a.id > b.id) ? 1 : -1),
                isLoading: false,
            }

        default:
            return state;
    }
}