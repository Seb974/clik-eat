import axios from 'axios';
import { GET_CITIES, GET_CITY, ADD_CITY, DELETE_CITY, UPDATE_CITY, CITIES_LOADING } from '../actions/types';
import { tokenConfig } from '../helpers/security';
import { returnErrors } from './errorActions';

export const getCities = () => dispatch => {
    dispatch({
        type: CITIES_LOADING,
        payload: ''
    });
    axios.get('/api/cities', tokenConfig())
         .then((res) => {
            dispatch({
                type: GET_CITIES,
                payload: res.data['hydra:member']
            });
         })
         .catch(err => {
            dispatch(returnErrors(err.response.data, err.response.status))
         });
};

export const getCity = (id, cities) => dispatch => {
    for (let i = 0; i < cities.length; i++) {
        if (parseInt(cities[i].id) === parseInt(id)) {
            dispatch({
                type: GET_CITY,
                payload: cities[i]
            })
            break;
        }
    }
};

export const addCity = city => dispatch =>{
    const body = JSON.stringify({ 
        name: city.name, 
        zipCode: city.zipCode,
        isDeliverable: city.isDeliverable,
        deliveryPeriod: city.deliveryPeriod,
    })
    axios.post('/api/cities', body, tokenConfig())
        .then((res) => {
            dispatch({
                type: ADD_CITY,
                payload: res.data
            })
        })
        .catch(err => {
            dispatch(
            returnErrors(err.response.data, err.response.status, 'CITY_CREATION_FAIL')
        )
    });
};

export const deleteCity = id => dispatch => {
    axios.delete('/api/cities/' + id, tokenConfig())
        .then((res) => {
            dispatch({
                type: DELETE_CITY,
                payload: res.data
            })
        })
        .catch(err => {
            dispatch(
            returnErrors(err.response.data, err.response.status, 'CITY_DELETE_FAIL')
        )
    });
};

export const updateCity = city => dispatch => {
    const body = JSON.stringify({ 
        name: city.name, 
        zipCode: city.zipCode,
        isDeliverable: city.isDeliverable,
        deliveryPeriod: city.deliveryPeriod,
    })
    axios.put('/api/cities/' + city.id, body, tokenConfig())
        .then((res) => {
            dispatch({
                type: UPDATE_CITY,
                payload: res.data
            })
        })
        .catch(err => {
            dispatch(
            returnErrors(err.response.data, err.response.status, 'CITY_EDITION_FAIL')
        )
    });
};