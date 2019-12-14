import { GET_ADMIN_PRODUCTS, GET_ADMIN_PRODUCT, ADD_PRODUCT, DELETE_PRODUCT, UPDATE_PRODUCT } from '../actions/types';

const initialState = {
    products: [],
    selected: {}
};
  
export default function(state = initialState, action) {
    switch (action.type) {
        case GET_ADMIN_PRODUCTS:
            return {
                ...state,
                products: action.payload,
            };
        case GET_ADMIN_PRODUCT:
            return {
                ...state,
                selected: action.payload
            };
        case ADD_PRODUCT:
            const enlargedProducts = [action.payload, ...state.products];
            return {
                ...state,
                products: enlargedProducts,
            };
        case DELETE_PRODUCT:
            const reducedProducts = state.products.filter(product => product.id !== action.payload.id);
            return {
                ...state,
                products: reducedProducts,
            };
        case UPDATE_PRODUCT:
            const previousProducts = state.products.filter(product => product.id !== action.payload.id);
            return {
                ...state,
                products: [action.payload, ...previousProducts],
            }

        default:
            return state;
    }
}