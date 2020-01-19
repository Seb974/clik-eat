import axios from 'axios';
import { GET_ITEMS, ADD_ITEM, UPDATE_ITEM, DELETE_ITEM, DELETE_CART, ITEMS_LOADING, INCREASE_PRODUCT_STOCK, DECREASE_PRODUCT_STOCK, UPDATE_PRODUCT_STOCK } from './types';
import { tokenConfig } from '../helpers/security';
import { returnErrors } from './errorActions';
import userExtractor from '../helpers/userExtractor';
import store from '../store';

export const getItems = () => dispatch => {
  let storedCart = localStorage.getItem('cart') || {};
  if (Object.keys(storedCart).length > 0) {
    storedCart = JSON.parse(storedCart);
    dispatch({
      type: GET_ITEMS,
      payload: storedCart
    })
  } else {
    const storedToken = localStorage.getItem('token') || "";
    const currentUserCart = storedToken !== "" ? (userExtractor(storedToken).cart || [] ) : [];
    dispatch({
        type: GET_ITEMS,
        payload: currentUserCart,
    });
  }
};

export const addItem = item => (dispatch, getState) => {
  //REMPLACE POUR TEMPS REEL MERCURE PAR :
  const body = JSON.stringify( { action: DECREASE_PRODUCT_STOCK, id: item.variant.id, quantity: parseInt(item.quantity) } )
  axios.post('/app/stock/update', body, tokenConfig())
       .catch(err => {
        dispatch(
          returnErrors(err.response.data, err.response.status, 'UPDATE_STOCK_FAIL')
        )
        });
  // FIN SUPPLEMENT MERCURE
    dispatch({
        type: ADD_ITEM,
        payload: {
            product: item.variant, 
            quantity: item.quantity,
            isPaid: false,
            parent: item.product,
        },
    });

    dispatch({
      type: DECREASE_PRODUCT_STOCK,
      payload: {
        product: item.product,
        variant: item.variant,
        quantity: item.quantity,
      }
    });
};

export const deleteItem = item => (dispatch, getState) => {
  //REMPLACE POUR TEMPS REEL MERCURE PAR :
  const body = JSON.stringify( { action: INCREASE_PRODUCT_STOCK, id: item.product.id, quantity: item.quantity } )
  axios.post('/app/stock/update', body, tokenConfig())
         .catch(err => {
          dispatch(
            returnErrors(err.response.data, err.response.status, 'UPDATE_STOCK_FAIL')
          )
          });
  // FIN SUPPLEMENT MERCURE
  dispatch({
    type: DELETE_ITEM,
    payload: item
  });

  dispatch({
    type: INCREASE_PRODUCT_STOCK,
    payload: {
      product: item.parent, 
      variant: item.product,
      quantity: item.quantity,
    }
  })
};

export const updateItem = (item, qty) => (dispatch, getState) => {
  const action = (qty > 0) ? DECREASE_PRODUCT_STOCK : INCREASE_PRODUCT_STOCK;
  //REMPLACE POUR TEMPS REEL MERCURE PAR :
  const body = JSON.stringify( { action: action, id: item.product.id, quantity: Math.abs(qty) } )
  axios.post('/app/stock/update', body, tokenConfig())
         .catch(err => {
          dispatch(
            returnErrors(err.response.data, err.response.status, 'UPDATE_STOCK_FAIL')
          )
          });
  // FIN SUPPLEMENT MERCURE
  dispatch({
    type: UPDATE_ITEM,
    payload: item
  });
};

export const updateVariant = (item) => (dispatch, getState) => {
  //REMPLACE POUR TEMPS REEL MERCURE PAR :
  const body = JSON.stringify( { action: UPDATE_PRODUCT_STOCK, id: item.variant.id, quantity: item.quantity } )
  axios.post('/app/stock/update', body, tokenConfig())
         .catch(err => {
          dispatch(
            returnErrors(err.response.data, err.response.status, 'UPDATE_STOCK_FAIL')
          )
          });
  // FIN SUPPLEMENT MERCURE
};

export const setItemsLoading = () => {
  return {
    type: ITEMS_LOADING
  };
};

export const deleteCart = () => (dispatch, getState) => {
  dispatch({
    type: DELETE_CART,
    payload: ''
  });
};