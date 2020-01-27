import axios from 'axios';
import { GET_ALLERGENS, GET_ALLERGEN, ADD_ALLERGEN, DELETE_ALLERGEN, UPDATE_ALLERGEN, ALLERGENS_LOADING } from '../actions/types';
import { tokenConfig } from '../helpers/security';
import { returnErrors } from './errorActions';
import allergenReducer from '../reducers/productReducer';
import { push } from 'react-router-redux'

export const getAllergens = () => dispatch => {
    dispatch({
        type: ALLERGENS_LOADING,
        payload: ''
    });
    axios
        .get('/api/allergens', tokenConfig())
        .then((res) => {
            dispatch({
                type: GET_ALLERGENS,
                payload: res.data['hydra:member']
            });
        })
        .catch(err => {
            dispatch(returnErrors(err.response.data, err.response.status))
        });
};

export const getAllergen = (id, allergens) => dispatch => {
    for (let i = 0; i < allergens.length; i++) {
        if (parseInt(allergens[i].id) === parseInt(id)) {
            dispatch({
                type: GET_ALLERGEN,
                payload: allergens[i]
            })
            break;
        }
    }
};

export const addAllergen = allergen => dispatch =>{
    const body = JSON.stringify({ 
        name: allergen.name, 
        products: allergen.products
    })
    axios.post('/api/allergens', body, tokenConfig())
        .then((res) => {
            dispatch({
                type: ADD_ALLERGEN,
                payload: res.data
            })
        })
        .catch(err => {
            dispatch(
            returnErrors(err.response.data, err.response.status, 'ALLERGEN_CREATION_FAIL')
        )
    });
};

export const deleteAllergen = id => dispatch => {
    axios.delete('/api/allergens/' + id, tokenConfig())
        .then((res) => {
            dispatch({
                type: DELETE_ALLERGEN,
                payload: res.data
            })
            // dispatch(push('/allergens'));
        })
        .catch(err => {
            dispatch(
            returnErrors(err.response.data, err.response.status, 'ALLERGEN_DELETE_FAIL')
        )
    });
};

export const updateAllergen = allergen => dispatch => {
    const body = JSON.stringify({ 
        name: allergen.name, 
        products: allergen.products
    })
    axios.put('/api/allergens/' + allergen.id, body, tokenConfig())
        .then((res) => {
            dispatch({
                type: UPDATE_ALLERGEN,
                payload: res.data
            })
        })
        .catch(err => {
            dispatch(
            returnErrors(err.response.data, err.response.status, 'ALLERGEN_CREATION_FAIL')
        )
    });
};