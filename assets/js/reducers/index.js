import { combineReducers } from 'redux';
import errorReducer from './errorReducer';
import authReducer from './authReducer';
import productReducer from './productReducer';
import itemReducer from './itemReducer';
import allergenReducer from './allergenReducer';

export default combineReducers({
  product: productReducer,
  item: itemReducer,
  error: errorReducer,
  auth: authReducer,
  allergen: allergenReducer
});