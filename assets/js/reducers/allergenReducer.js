import { GET_ALLERGENS, GET_ALLERGEN, ADD_ALLERGEN, DELETE_ALLERGEN, UPDATE_ALLERGEN } from '../actions/types';

const initialState = {
    allergens: [],
    selected: {}
};
  
export default function(state = initialState, action) {
    switch (action.type) {
        case GET_ALLERGENS:
            return {
                ...state,
                allergens: action.payload,
            };
        case GET_ALLERGEN:
            return {
                ...state,
                selected: action.payload
            };
        case ADD_ALLERGEN:
            const enlargedAllergens = [action.payload, ...state.allergens];
            return {
                ...state,
                allergens: enlargedAllergens,
            };
        case DELETE_ALLERGEN:
            const reducedAllergens = state.allergens.filter(allergen => allergen.id !== action.payload.id);
            return {
                ...state,
                allergens: reducedAllergens,
            };
        case UPDATE_ALLERGEN:
            const previousAllergens = state.allergens.filter(allergen => allergen.id !== action.payload.id);
            return {
                ...state,
                allergens: [action.payload, ...previousAllergens],
            }

        default:
            return state;
    }
}