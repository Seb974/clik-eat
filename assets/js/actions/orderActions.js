import axios from 'axios';
import { GET_ORDERS, GET_ORDER, SEND_TO_DELIVERY, DELETE_ORDER, UPDATE_ORDER, CLOSE_ORDER } from '../actions/types';
import { tokenConfig } from '../helpers/security';
import { returnErrors } from './errorActions';

export const getOrders = () => dispatch => {
    axios.get('/api/order_entities', tokenConfig())
         .then((res) => {
            dispatch({
                type: GET_ORDERS,
                payload: res.data['hydra:member']
            })
         })
         .catch(err => {
            dispatch(returnErrors(err.response.data, err.response.status))
         });
};

export const getOrder = (id, orders) => dispatch => {
    for (let i = 0; i < orders.length; i++) {
        if (parseInt(orders[i].id) === parseInt(id)) {
            dispatch({
                type: GET_ORDER,
                payload: orders[i]
            })
            break;
        }
    }
};

export const transferToDelivery = id => dispatch =>{
    const token = localStorage.getItem('token');
    const config = {
        headers: {
            'Content-type': 'application/merge-patch+json'
        }
    }
    if (token) {
        config.headers['Authorization'] = 'Bearer ' + token;
    }
    const body = JSON.stringify({ 
        status: "ON DELIVERY",
    })
    axios.patch('/api/order_entities/' + id, body, config)
         .then( res => {
            dispatch({
                type: SEND_TO_DELIVERY,
                payload: res.data
            })
         });
};

export const closeOrder = id => dispatch =>{
    const token = localStorage.getItem('token');
    const config = {
        headers: {
            'Content-type': 'application/merge-patch+json'
        }
    }
    if (token) {
        config.headers['Authorization'] = 'Bearer ' + token;
    }
    const body = JSON.stringify({ 
        status: "DELIVERED",
    })
    axios.patch('/api/order_entities/' + id, body, config)
         .then( res => {
            dispatch({
                type: CLOSE_ORDER,
                payload: res.data
            })
         });
};

export const deleteOrder = id => dispatch => {
    axios.delete('/api/order_entities/' + id, tokenConfig())
         .then((res) => {
            dispatch({
                type: DELETE_ORDER,
                payload: res.data
            })
         })
         .catch(err => {
            dispatch(
                returnErrors(err.response.data, err.response.status, 'ORDER_DELETE_FAIL')
            )
         });
};

export const updateOrder = order => dispatch => {
    const body = JSON.stringify({ 
        name: order.name, 
        taux: order.taux
    })
    axios.put('/api/order_entities/' + order.id, body, tokenConfig())
         .then((res) => {
            dispatch({
                type: UPDATE_ORDER,
                payload: res.data
            })
         })
         .catch(err => {
            dispatch(
                returnErrors(err.response.data, err.response.status, 'ORDER_EDITION_FAIL')
            )
         });
};