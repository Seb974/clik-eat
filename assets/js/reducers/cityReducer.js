import { GET_CITIES, GET_CITY, ADD_CITY, DELETE_CITY, UPDATE_CITY } from '../actions/types';

const initialState = {
    cities: [],
    selected: {}
};
  
export default function(state = initialState, action) {
    switch (action.type) {
        case GET_CITIES:
            return {
                ...state,
                cities: action.payload,
            };
        case GET_CITY:
            return {
                ...state,
                selected: action.payload
            };
        case ADD_CITY:
            const enlargedCities = [action.payload, ...state.cities];
            return {
                ...state,
                cities: enlargedCities,
            };
        case DELETE_CITY:
            const reducedCities = state.cities.filter(city => city.id !== action.payload.id);
            return {
                ...state,
                cities: reducedCities,
            };
        case UPDATE_CITY:
            const previousCities = state.cities.filter(city => city.id !== action.payload.id);
            return {
                ...state,
                cities: [action.payload, ...previousCities],
            }

        default:
            return state;
    }
}