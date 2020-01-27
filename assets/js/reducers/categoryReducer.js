import { GET_CATEGORIES, GET_CATEGORY, ADD_CATEGORY, DELETE_CATEGORY, UPDATE_CATEGORY, CATEGORIES_LOADING } from '../actions/types';

const initialState = {
    categories: [],
    selected: {},
    isLoading: false,
};
  
export default function(state = initialState, action) {
    switch (action.type) {
        case CATEGORIES_LOADING:
            return {
                ...state,
                isLoading: true,
            };
        case GET_CATEGORIES:
            return {
                ...state,
                categories: action.payload,
                isLoading: false,
            };
        case GET_CATEGORY:
            return {
                ...state,
                selected: action.payload,
                isLoading: false,
            };
        case ADD_CATEGORY:
            const enlargedCategories = [action.payload, ...state.categories];
            return {
                ...state,
                categories: enlargedCategories,
                isLoading: false,
            };
        case DELETE_CATEGORY:
            const reducedCategories = state.categories.filter(category => category.id !== action.payload.id);
            return {
                ...state,
                categories: reducedCategories,
                isLoading: false,
            };
        case UPDATE_CATEGORY:
            const previousCategories = state.categories.filter(category => category.id !== action.payload.id);
            return {
                ...state,
                categories: [action.payload, ...previousCategories],
                isLoading: false,
            }
        default:
            return state;
    }
}