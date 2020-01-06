import axios from 'axios';
import { GET_CATEGORIES, GET_CATEGORY, ADD_CATEGORY, DELETE_CATEGORY, UPDATE_CATEGORY } from '../actions/types';
import { tokenConfig } from './authActions';
import { returnErrors } from './errorActions';

export const getCategories = () => dispatch => {
    axios
        .get('/api/categories')
        .then((res) => {
            dispatch({
                type: GET_CATEGORIES,
                payload: res.data['hydra:member']
            })
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
    const config = { headers: { 'Content-Type': 'application/json' } };
    const body = JSON.stringify({ 
        name: category.name, 
        products: category.products
    })
    axios.post('/api/categories', body, config)
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
    axios.delete('/api/categories/' + id)
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
    const config = { headers: { 'Content-Type': 'application/json' } };
    const body = JSON.stringify({ 
        name: category.name, 
        products: category.products
    })
    axios.put('/api/categories/' + category.id, body, config)
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