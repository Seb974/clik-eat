import { GET_USERS, GET_USER, ADD_USER, DELETE_USER, UPDATE_USER } from '../actions/types';

const initialState = {
    users: [],
    selected: {}
};
  
export default function(state = initialState, action) {
    switch (action.type) {
        case GET_USERS:
            return {
                ...state,
                users: action.payload,
            };
        case GET_USER:
            return {
                ...state,
                selected: action.payload
            };
        case ADD_USER:
            const enlargedUsers = [action.payload, ...state.users];
            return {
                ...state,
                users: enlargedUsers,
            };
        case DELETE_USER:
            const reducedUsers = state.users.filter(user => user.id !== action.payload.id);
            return {
                ...state,
                users: reducedUsers,
            };
        case UPDATE_USER:
            const previousUsers = state.users.filter(user => user.id !== action.payload.id);
            return {
                ...state,
                users: [action.payload, ...previousUsers],
            }

        default:
            return state;
    }
}