import { combineReducers } from 'redux';
import errorReducer from './errorReducer';
import authReducer from './authReducer';
import productReducer from './productReducer';
import itemReducer from './itemReducer';
import allergenReducer from './allergenReducer';
import taxReducer from './taxReducer';
import categoryReducer from './categoryReducer';
import cityReducer from './cityReducer';
import userReducer from './userReducer';
import productAdminReducer from './productAdminReducer';
import supplierReducer from './supplierReducer';

export default combineReducers({
  product: productReducer,
  item: itemReducer,
  error: errorReducer,
  auth: authReducer,
  allergen: allergenReducer,
  tax: taxReducer,
  category: categoryReducer,
  city: cityReducer,
  user: userReducer,
  productAdmin: productAdminReducer,
  supplier: supplierReducer
});