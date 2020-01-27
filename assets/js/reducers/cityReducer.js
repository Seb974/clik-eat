import { GET_CITIES, GET_CITY, ADD_CITY, DELETE_CITY, UPDATE_CITY, CITIES_LOADING } from '../actions/types';

const initialState = {
    cities: [],
    selected: {}, 
    isLoading: false,
};
  
export default function(state = initialState, action) {
    switch (action.type) {
        case CITIES_LOADING:
            return {
                ...state,
                isLoading: true,
            };
        case GET_CITIES:
            return {
                ...state,
                cities: action.payload,
                isLoading: false,
            };
        case GET_CITY:
            return {
                ...state,
                selected: action.payload,
                isLoading: false,
            };
        case ADD_CITY:
            const enlargedCities = [action.payload, ...state.cities];
            return {
                ...state,
                cities: enlargedCities,
                isLoading: false,
            };
        case DELETE_CITY:
            const reducedCities = state.cities.filter(city => city.id !== action.payload.id);
            return {
                ...state,
                cities: reducedCities,
                isLoading: false,
            };
        case UPDATE_CITY:
            const previousCities = state.cities.filter(city => city.id !== action.payload.id);
            return {
                ...state,
                cities: [action.payload, ...previousCities],
                isLoading: false,
            }

        default:
            return state;
    }
}