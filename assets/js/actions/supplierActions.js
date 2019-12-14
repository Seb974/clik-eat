import axios from 'axios';
import { GET_SUPPLIERS, GET_SUPPLIER, ADD_SUPPLIER, DELETE_SUPPLIER, UPDATE_SUPPLIER } from '../actions/types';
import { tokenConfig } from './authActions';
import { returnErrors } from './errorActions';
import { push } from 'react-router-redux'

export const getSuppliers = () => dispatch => {
    axios
        .get('/api/suppliers')
        .then((res) => {
            dispatch({
                type: GET_SUPPLIERS,
                payload: res.data['hydra:member']
            })
        })
        .catch(err => {
            console.log(err);
        });
};

export const getSupplier = (id, suppliers) => dispatch => {
    for (let i = 0; i < suppliers.length; i++) {
        if (parseInt(suppliers[i].id) === parseInt(id)) {
            dispatch({
                type: GET_SUPPLIER,
                payload: suppliers[i]
            })
            break;
        }
    }
};

export const addSupplier = supplier => dispatch =>{
    const config = { headers: { 'Content-Type': 'application/json' } };
    const body = JSON.stringify({ 
        name: supplier.name, 
        address: supplier.address,
        gps: supplier.gps,
        preparationPeriod: supplier.preparationPeriod,
        users: supplier.users.map(user => "/api/users/" + user.id)
        // users: supplier.users.map( => "/api/users/" + id)
    })
    axios.post('/api/suppliers', body, config)
        .then((res) => {
            dispatch({
                type: ADD_SUPPLIER,
                payload: res.data
            })
        })
        .catch(err => {
            console.log(err);
    });
};

export const deleteSupplier = id => dispatch => {
    axios.delete('/api/suppliers/' + id)
        .then((res) => {
            dispatch({
                type: DELETE_SUPPLIER,
                payload: res.data
            })
        })
        .catch(err => {
            console.log(err);
    });
};

export const updateSupplier = supplier => dispatch => {
    const config = { headers: { 'Content-Type': 'application/json' } };
    const body = JSON.stringify({ 
        name: supplier.name, 
        address: supplier.address,
        gps: supplier.gps,
        preparationPeriod: supplier.preparationPeriod,
        users: supplier.users.map(user => "/api/users/" + user.id)
        // users: supplier.map(id => "/api/users/" + id)
    })
    axios.put('/api/suppliers/' + supplier.id, body, config)
        .then((res) => {
            console.log('In supplierActions : ');
            console.log(res.data);
            dispatch({
                type: UPDATE_SUPPLIER,
                payload: res.data
            })
        })
        .catch(err => {
            console.log(err);
    });
};