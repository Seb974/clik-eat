import { GET_TAXES, GET_TAX, ADD_TAX, DELETE_TAX, UPDATE_TAX } from '../actions/types';

const initialState = {
    taxes: [],
    selected: {}
};
  
export default function(state = initialState, action) {
    switch (action.type) {
        case GET_TAXES:
            return {
                ...state,
                taxes: action.payload,
            };
        case GET_TAX:
            return {
                ...state,
                selected: action.payload
            };
        case ADD_TAX:
            const enlargedTaxes = [action.payload, ...state.taxes];
            return {
                ...state,
                taxes: enlargedTaxes,
            };
        case DELETE_TAX:
            const reducedTaxes = state.taxes.filter(tax => tax.id !== action.payload.id);
            return {
                ...state,
                taxes: reducedTaxes,
            };
        case UPDATE_TAX:
            const previousTaxes = state.taxes.filter(tax => tax.id !== action.payload.id);
            return {
                ...state,
                taxes: [action.payload, ...previousTaxes],
            }

        default:
            return state;
    }
}