import { GET_USERS, GET_USER, ADD_USER, DELETE_USER, UPDATE_USER, USERS_LOADING } from '../actions/types';

const initialState = {
    users: [],
    selected: {},
    isLoading: false,
};
  
export default function(state = initialState, action) {
    switch (action.type) {
        case USERS_LOADING:
            return {
                ...state,
                isLoading: true
            };
        case GET_USERS:
            return {
                ...state,
                users: action.payload,
                isLoading: false
            };
        case GET_USER:
            return {
                ...state,
                selected: action.payload,
                isLoading: false
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
                isLoading: false
            };
        case DELETE_USER:
            const reducedUsers = state.users.filter(user => user.id !== action.payload.id);
            return {
                ...state,
                users: reducedUsers,
                isLoading: false
            };
        case UPDATE_USER:
            const previousUsers = state.users.filter(user => user.id !== action.payload.id);
            return {
                ...state,
                users: [action.payload, ...previousUsers].sort((a, b) => (a.id > b.id) ? 1 : -1),
                isLoading: false
            }

        default:
            return state;
    }
}