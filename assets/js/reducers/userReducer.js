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
            let enlargedUsers = [];
            const newUser = state.users.filter(user => user.id === action.payload.id);
            if (typeof newUser === 'undefined') {
                enlargedUsers = [action.payload, ...state.users].sort((a, b) => (a.id > b.id) ? 1 : -1);
            }
            else {
                enlargedUsers = [action.payload, ...state.users.filter(user => user.id !== action.payload.id)].sort((a, b) => (a.id > b.id) ? 1 : -1);
            }
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
                users: [action.payload, ...previousUsers].sort((a, b) => (a.id > b.id) ? 1 : -1),
            }

        default:
            return state;
    }
}