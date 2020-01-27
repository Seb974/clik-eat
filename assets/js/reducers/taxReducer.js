import { GET_TAXES, GET_TAX, ADD_TAX, DELETE_TAX, UPDATE_TAX, TAXES_LOADING } from '../actions/types';

const initialState = {
    taxes: [],
    selected: {}, 
    isLoading: false,
};
  
export default function(state = initialState, action) {
    switch (action.type) {
        case TAXES_LOADING:
            return {
                ...state,
                isLoading: true,
            };
        case GET_TAXES:
            return {
                ...state,
                taxes: action.payload,
                isLoading: false,
            };
        case GET_TAX:
            return {
                ...state,
                selected: action.payload,
                isLoading: false,
            };
        case ADD_TAX:
            const enlargedTaxes = [action.payload, ...state.taxes];
            return {
                ...state,
                taxes: enlargedTaxes,
                isLoading: false,
            };
        case DELETE_TAX:
            const reducedTaxes = state.taxes.filter(tax => tax.id !== action.payload.id);
            return {
                ...state,
                taxes: reducedTaxes,
                isLoading: false,
            };
        case UPDATE_TAX:
            const previousTaxes = state.taxes.filter(tax => tax.id !== action.payload.id);
            return {
                ...state,
                taxes: [action.payload, ...previousTaxes],
                isLoading: false,
            }

        default:
            return state;
    }
}