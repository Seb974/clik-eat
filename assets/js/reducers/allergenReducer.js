import { GET_ALLERGENS, GET_ALLERGEN, ADD_ALLERGEN, DELETE_ALLERGEN, UPDATE_ALLERGEN, ALLERGENS_LOADING } from '../actions/types';

const initialState = {
    allergens: [],
    selected: {}, 
    isLoading: false,
};
  
export default function(state = initialState, action) {
    switch (action.type) {
        case ALLERGENS_LOADING:
            return {
                ...state,
                isLoading: true,
            };
        case GET_ALLERGENS:
            return {
                ...state,
                allergens: action.payload,
                isLoading: false,
            };
        case GET_ALLERGEN:
            return {
                ...state,
                selected: action.payload,
                isLoading: false,
            };
        case ADD_ALLERGEN:
            const enlargedAllergens = [action.payload, ...state.allergens];
            return {
                ...state,
                allergens: enlargedAllergens,
                isLoading: false,
            };
        case DELETE_ALLERGEN:
            const reducedAllergens = state.allergens.filter(allergen => allergen.id !== action.payload.id);
            return {
                ...state,
                allergens: reducedAllergens,
                isLoading: false,
            };
        case UPDATE_ALLERGEN:
            const previousAllergens = state.allergens.filter(allergen => allergen.id !== action.payload.id);
            return {
                ...state,
                allergens: [action.payload, ...previousAllergens],
                isLoading: false,
            }

        default:
            return state;
    }
}