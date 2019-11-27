import axios from 'axios';
import { GET_TAXES, GET_TAX, ADD_TAX, DELETE_TAX, UPDATE_TAX } from '../actions/types';
import { tokenConfig } from './authActions';
import { returnErrors } from './errorActions';
import allergenReducer from '../reducers/productReducer';
import { push } from 'react-router-redux'

export const getTaxes = () => dispatch => {
    axios
        .get('/api/tvas')
        .then((res) => {
            dispatch({
                type: GET_TAXES,
                payload: res.data['hydra:member']
            })
        })
        .catch(err => {
            dispatch(returnErrors(err.response.data, err.response.status))
        });
};

export const getTax = (id, taxes) => dispatch => {
    for (let i = 0; i < taxes.length; i++) {
        if (parseInt(taxes[i].id) === parseInt(id)) {
            dispatch({
                type: GET_TAX,
                payload: taxes[i]
            })
            break;
        }
    }
};

export const addTax = tax => dispatch =>{
    const config = { headers: { 'Content-Type': 'application/json' } };
    const body = JSON.stringify({ 
        name: tax.name, 
        taux: tax.taux
    })
    axios.post('/api/tvas', body, config)
        .then((res) => {
            dispatch({
                type: ADD_TAX,
                payload: res.data
            })
        })
        .catch(err => {
            dispatch(
            returnErrors(err.response.data, err.response.status, 'TAX_CREATION_FAIL')
        )
    });
};

export const deleteTax = id => dispatch => {
    axios.delete('/api/tvas/' + id)
        .then((res) => {
            dispatch({
                type: DELETE_TAX,
                payload: res.data
            })
        })
        .catch(err => {
            dispatch(
            returnErrors(err.response.data, err.response.status, 'TAX_DELETE_FAIL')
        )
    });
};

export const updateTax = tax => dispatch => {
    const config = { headers: { 'Content-Type': 'application/json' } };
    const body = JSON.stringify({ 
        name: tax.name, 
        taux: tax.taux
    })
    axios.put('/api/tvas/' + tax.id, body, config)
        .then((res) => {
            dispatch({
                type: UPDATE_TAX,
                payload: res.data
            })
        })
        .catch(err => {
            dispatch(
            returnErrors(err.response.data, err.response.status, 'TAX_EDITION_FAIL')
        )
    });
};