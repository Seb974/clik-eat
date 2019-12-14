import { GET_SUPPLIERS, GET_SUPPLIER, ADD_SUPPLIER, DELETE_SUPPLIER, UPDATE_SUPPLIER } from '../actions/types';

const initialState = {
    suppliers: [],
    selected: {}
};
  
export default function(state = initialState, action) {
    switch (action.type) {
        case GET_SUPPLIERS:
            return {
                ...state,
                suppliers: action.payload,
            };
        case GET_SUPPLIER:
            return {
                ...state,
                selected: action.payload
            };
        case ADD_SUPPLIER:
            const enlargedSuppliers = [action.payload, ...state.suppliers];
            return {
                ...state,
                suppliers: enlargedSuppliers,
            };
        case DELETE_SUPPLIER:
            const reducedSuppliers = state.suppliers.filter(supplier => supplier.id !== action.payload.id);
            return {
                ...state,
                suppliers: reducedSuppliers,
            };
        case UPDATE_SUPPLIER:
            console.log('In supplierReducer : ');
            console.log(action.payload);
            const previousSuppliers = state.suppliers.filter(supplier => supplier.id !== action.payload.id);
            return {
                ...state,
                suppliers: [action.payload, ...previousSuppliers].sort((a, b) => (a.id > b.id) ? 1 : -1),
            }

        default:
            return state;
    }
}