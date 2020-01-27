import axios from 'axios';
import { GET_CATEGORIES, GET_CATEGORY, ADD_CATEGORY, DELETE_CATEGORY, UPDATE_CATEGORY, CATEGORIES_LOADING } from '../actions/types';
import { tokenConfig } from '../helpers/security';
import { returnErrors } from './errorActions';

export const getCategories = () => dispatch => {
    dispatch({
        type: CATEGORIES_LOADING,
        payload: ''
    })
    axios.get('/api/categories', tokenConfig())
         .then((res) => {
            dispatch({
                type: GET_CATEGORIES,
                payload: res.data['hydra:member']
            });
         })
         .catch(err => {
            dispatch(returnErrors(err.response.data, err.response.status))
         });
};

export const getCategory = (id, categories) => dispatch => {
    for (let i = 0; i < categories.length; i++) {
        if (parseInt(categories[i].id) === parseInt(id)) {
            dispatch({
                type: GET_CATEGORY,
                payload: categories[i],
            });
            return ;
        }
    }
    dispatch({
        type: GET_CATEGORY,
        payload: {},
    });
};

export const addCategory = category => dispatch =>{
    const body = JSON.stringify({ 
        name: category.name, 
        products: category.products
    })
    axios.post('/api/categories', body, tokenConfig())
        .then((res) => {
            dispatch({
                type: ADD_CATEGORY,
                payload: res.data
            })
        })
        .catch(err => {
            dispatch(
            returnErrors(err.response.data, err.response.status, 'CATEGORY_CREATION_FAIL')
        )
    });
};

export const deleteCategory = id => dispatch => {
    axios.delete('/api/categories/' + id, tokenConfig())
        .then((res) => {
            dispatch({
                type: DELETE_CATEGORY,
                payload: res.data
            })
        })
        .catch(err => {
            dispatch(
            returnErrors(err.response.data, err.response.status, 'CATEGORY_DELETE_FAIL')
        )
    });
};

export const updateCategory = category => dispatch => {
    const body = JSON.stringify({ 
        name: category.name, 
        products: category.products
    })
    axios.put('/api/categories/' + category.id, body, tokenConfig())
        .then((res) => {
            dispatch({
                type: UPDATE_CATEGORY,
                payload: res.data
            })
        })
        .catch(err => {
            dispatch(
            returnErrors(err.response.data, err.response.status, 'CATEGORY_EDITION_FAIL')
        )
    });
};