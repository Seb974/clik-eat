import axios from 'axios';
import { GET_ADMIN_PRODUCTS, GET_ADMIN_PRODUCT, ADD_PRODUCT, DELETE_PRODUCT, UPDATE_PRODUCT } from './types';
import { tokenConfig } from '../helpers/security';
import { returnErrors } from './errorActions';
import productAdminReducer from '../reducers/productAdminReducer';

export const getAdminProducts = () => dispatch => {
    axios.get('/api/products', tokenConfig())
         .then((res) => {
            dispatch({
                type: GET_ADMIN_PRODUCTS,
                payload: res.data['hydra:member']
            })
         })
         .catch(err => {
            dispatch(returnErrors(err.response.data, err.response.status))
         });
};

export const getAdminProduct = (id, products) => dispatch => {
    for (let i = 0; i < products.length; i++) {
        if (parseInt(products[i].id) === parseInt(id)) {
            dispatch({
                type: GET_ADMIN_PRODUCT,
                payload: products[i]
            })
            break;
        }
    }
};

export const deleteProduct = id => dispatch => {
    axios.delete('/api/products/' + id, tokenConfig())
          .then((res) => {
                dispatch({
                    type: DELETE_PRODUCT,
                    payload: res.data
                })
          })
          .catch(err => {
                console.log(err);
          });
};

export const addProduct = (fromState) => dispatch =>{
    const body = JSON.stringify({ 
        name: fromState.name, 
        description: fromState.description
    })
    axios.post('/api/products', body, tokenConfig())
        .then((res) => {
            const newUserId = res.data.id;
            (async () => {
                await registerMetas(fromState, newUserId);

                const newUser = await getUserFromDb(newUserId);
                dispatch({
                    type: ADD_USER,
                    payload: newUser.data
                })
            })();
        })
        .catch(err => {
            console.log(err);
        });
};

export const updateProduct = (fromState) => dispatch => {
    const product = fromState.selection;
    const body = JSON.stringify({ 
        name: fromState.name, 
        description: fromState.description
    });
    axios.put('/api/users/' + product.id, body, tokenConfig())
        .then((res) => {
            const updatedUserId = res.data.id;
            (async () => {
                await registerMetas(fromState, updatedUserId);
                const updatedUser = await getUserFromDb(updatedUserId);
                await dispatch({
                    type: UPDATE_USER,
                    payload: updatedUser.data
                })
            })();
        })
        .catch(err => {
            console.log(err);
        });
};