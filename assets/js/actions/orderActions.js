import axios from 'axios';
import { GET_ORDERS, GET_ORDER, ADD_ORDER, DELETE_ORDER, UPDATE_ORDER } from '../actions/types';
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

export const addOrder = order => dispatch =>{
    console.log(order);
    // const body = JSON.stringify({ 
    //     name: order.name, 
    //     taux: order.taux
    // })
    // axios.post('/api/order_entities', body, tokenConfig())
    //      .then((res) => {
    //         dispatch({
    //             type: ADD_ORDER,
    //             payload: res.data
    //         })
    //      })
    //      .catch(err => {
    //         dispatch(
    //             returnErrors(err.response.data, err.response.status, 'ORDER_CREATION_FAIL')
    //         )
    //      });
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