import { GET_SUPPLIERS, GET_SUPPLIER, ADD_SUPPLIER, DELETE_SUPPLIER, UPDATE_SUPPLIER, SUPPLIER_LOADING } from '../actions/types';

const initialState = {
    suppliers: [],
    selected: {},
    isLoading: false,
};
  
export default function(state = initialState, action) {
    switch (action.type) {
        case SUPPLIER_LOADING:
            return {
                ...state,
                isLoading: true,
                };
        case GET_SUPPLIERS:
            return {
                ...state,
                suppliers: action.payload,
                isLoading: false,
            };
        case GET_SUPPLIER:
            return {
                ...state,
                selected: action.payload,
                isLoading: false,
            };
        case ADD_SUPPLIER:
            const enlargedSuppliers = [action.payload, ...state.suppliers];
            return {
                ...state,
                suppliers: enlargedSuppliers,
                isLoading: false,
            };
        case DELETE_SUPPLIER:
            const reducedSuppliers = state.suppliers.filter(supplier => supplier.id !== action.payload.id);
            return {
                ...state,
                suppliers: reducedSuppliers,
                isLoading: false,
            };
        case UPDATE_SUPPLIER:
            console.log('In supplierReducer : ');
            console.log(action.payload);
            const previousSuppliers = state.suppliers.filter(supplier => supplier.id !== action.payload.id);
            return {
                ...state,
                suppliers: [action.payload, ...previousSuppliers].sort((a, b) => (a.id > b.id) ? 1 : -1),
                isLoading: false,
            }

        default:
            return state;
    }
}