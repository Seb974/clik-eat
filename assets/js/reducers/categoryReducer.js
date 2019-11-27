import { GET_CATEGORIES, GET_CATEGORY, ADD_CATEGORY, DELETE_CATEGORY, UPDATE_CATEGORY } from '../actions/types';

const initialState = {
    categories: [],
    selected: {}
};
  
export default function(state = initialState, action) {
    switch (action.type) {
        case GET_CATEGORIES:
            return {
                ...state,
                categories: action.payload,
            };
        case GET_CATEGORY:
            return {
                ...state,
                selected: action.payload
            };
        case ADD_CATEGORY:
            const enlargedCategories = [action.payload, ...state.categories];
            return {
                ...state,
                categories: enlargedCategories,
            };
        case DELETE_CATEGORY:
            const reducedCategories = state.categories.filter(category => category.id !== action.payload.id);
            return {
                ...state,
                categories: reducedCategories,
            };
        case UPDATE_CATEGORY:
            const previousCategories = state.categories.filter(category => category.id !== action.payload.id);
            return {
                ...state,
                categories: [action.payload, ...previousCategories],
            }
        default:
            return state;
    }
}