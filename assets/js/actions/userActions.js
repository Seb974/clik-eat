import axios from 'axios';
import { GET_USERS, GET_USER, ADD_USER, DELETE_USER, UPDATE_USER } from '../actions/types';
import { tokenConfig } from '../helpers/security';
import { returnErrors } from './errorActions';
// import { resolve } from 'dns';
// import MetadataRecorder from '../helpers/MetadataRecorder';


export const getUsers = () => dispatch => {
    axios
        .get('/api/users')
        .then((res) => {
            dispatch({
                type: GET_USERS,
                payload: res.data['hydra:member']
            })
        })
        .catch(err => {
            dispatch(returnErrors(err.response.data, err.response.status))
        });
};

export const getUser = (id, users) => dispatch => {
    for (let i = 0; i < users.length; i++) {
        if (parseInt(users[i].id) === parseInt(id)) {
            dispatch({
                type: GET_USER,
                payload: users[i]
            })
            break;
        }
    }
};

export const deleteUser = id => dispatch => {
    axios.delete('/api/users/' + id)
        .then((res) => {
            dispatch({
                type: DELETE_USER,
                payload: res.data
            })
        })
        .catch(err => {
            dispatch(
            returnErrors(err.response.data, err.response.status, 'USER_DELETE_FAIL')
        )
    });
};

export const addUser = (fromState) => dispatch =>{
    const config = { headers: { 'Content-Type': 'application/json' } };
    const body = JSON.stringify({ 
        username: fromState.username, 
        email: fromState.email,
        roles: fromState.roles,
        password: fromState.password,
        isBanned: fromState.isBanned
    })
    axios.post('/api/users', body, config)
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

export const updateUser = (fromState) => dispatch => {
    const config = { headers: { 'Content-Type': 'application/json' } };
    const user = fromState.selection;
    const body = JSON.stringify({ 
        username: fromState.username, 
        email: fromState.email,
        roles: fromState.roles,
        password: fromState.password,
        isBanned: fromState.isBanned,
    });
    axios.put('/api/users/' + user.id, body, config)
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

export const registerMetas = async (fromState, userId) => {
    const user = fromState.selection;
    const phone_number = typeof user.metadata === 'undefined' ? undefined : user.metadata.find(metadata => (metadata.type === 'phone_number'));
    const delivery_line_1 = typeof user.metadata === 'undefined' ? undefined : user.metadata.find(metadata => (metadata.type === 'delivery_line_1'));
    const delivery_line_2 = typeof user.metadata === 'undefined' ? undefined : user.metadata.find(metadata => (metadata.type === 'delivery_line_2'));
    const delivery_city = typeof user.metadata === 'undefined' ? undefined : user.metadata.find(metadata => (metadata.type === 'delivery_city'));
    const billing_line_1 = typeof user.metadata === 'undefined' ? undefined : user.metadata.find(metadata => (metadata.type === 'billing_line_1'));
    const billing_line_2 = typeof user.metadata === 'undefined' ? undefined : user.metadata.find(metadata => (metadata.type === 'billing_line_2'));
    const billing_city = typeof user.metadata === 'undefined' ? undefined : user.metadata.find(metadata => (metadata.type === 'billing_city'));
    const delivery_gps = typeof user.metadata === 'undefined' ? undefined : user.metadata.find(metadata => (metadata.type === 'delivery_gps'));
    const phone_number_id = typeof phone_number !== 'undefined' ? phone_number.id : -1;
    const delivery_line_1_id = typeof delivery_line_1 !== 'undefined' ? delivery_line_1.id : -1;
    const delivery_line_2_id = typeof delivery_line_2 !== 'undefined' ? delivery_line_2.id : -1;
    const delivery_city_id = typeof delivery_city !== 'undefined' ? delivery_city.id : -1;
    const billing_line_1_id = typeof billing_line_1 !== 'undefined' ? billing_line_1.id : -1;
    const billing_line_2_id = typeof billing_line_2 !== 'undefined' ? billing_line_2.id : -1;
    const billing_city_id = typeof billing_city !== 'undefined' ? billing_city.id : -1;
    const delivery_gps_id = typeof delivery_gps !== 'undefined' ? delivery_gps.id : -1;
    if ((typeof phone_number === 'undefined' || phone_number.field !== fromState.phone) && fromState.phone !== '') {
        if (phone_number_id === -1)
            axios.post('/api/metadata', JSON.stringify({type:'phone_number', field: fromState.phone, user: '/api/users/' + userId}), tokenConfig())
        else
            axios.put('/api/metadata/' + phone_number_id, JSON.stringify({field: fromState.phone}), tokenConfig())
    }
    
    if ((typeof delivery_line_1 === 'undefined' || delivery_line_1.field !== fromState.d_address) && fromState.d_address !== '') {
        if (delivery_line_1_id === -1) {
            axios.post('/api/metadata', JSON.stringify({type:'delivery_line_1', field: fromState.d_address, user: '/api/users/' + userId}), tokenConfig())
        } else {
            axios.put('/api/metadata/' + delivery_line_1_id, JSON.stringify({field: fromState.d_address}), tokenConfig())
        }
    }
    
    if ((typeof delivery_line_2 === 'undefined' || delivery_line_2.field !== fromState.d_address2) && fromState.d_address2 !== '') {
        if (delivery_line_2_id === -1) {
            axios.post('/api/metadata', JSON.stringify({type:'delivery_line_2', field: fromState.d_address2, user: '/api/users/' + userId}), tokenConfig())
        } else {
            axios.put('/api/metadata/' + delivery_line_2_id, JSON.stringify({field: fromState.d_address2}), tokenConfig())
        }
    }
    
    if ((typeof delivery_city === 'undefined' || delivery_city.field !== fromState.d_zipCode) && fromState.d_zipCode !== '') {
        if (delivery_city_id === -1) {
            axios.post('/api/metadata', JSON.stringify({type:'delivery_city', field: fromState.d_zipCode, user: '/api/users/' + userId}), tokenConfig())
        } else {
            axios.put('/api/metadata/' + delivery_city_id, JSON.stringify({field: fromState.d_zipCode}), tokenConfig())
        }
    }
    
    if ((typeof delivery_gps === 'undefined' || delivery_gps.field !== fromState.d_gps) && fromState.d_gps !== '') {
        if (delivery_gps_id === -1) {
            axios.post('/api/metadata', JSON.stringify({type:'delivery_gps', field: fromState.d_gps, user: '/api/users/' + userId}), tokenConfig())
        } else {
            axios.put('/api/metadata/' + delivery_gps_id, JSON.stringify({field: fromState.d_gps}), tokenConfig())
        }
    }
    
    if ((typeof billing_line_1 === 'undefined' || billing_line_1.field !== fromState.b_address) && fromState.b_address !== '') {
        if (billing_line_1_id === -1) {
            axios.post('/api/metadata', JSON.stringify({type:'billing_line_1', field: fromState.b_address, user: '/api/users/' + userId}), tokenConfig())
        } else {
            axios.put('/api/metadata/' + billing_line_1_id, JSON.stringify({field: fromState.b_address}), tokenConfig())
        }
    }
    
    if ((typeof billing_line_2 === 'undefined' || billing_line_2.field !== fromState.b_address2) && fromState.b_address2 !== '') {
        if (billing_line_2_id === -1) {
            axios.post('/api/metadata', JSON.stringify({type:'billing_line_2', field: fromState.b_address2, user: '/api/users/' + userId}), tokenConfig())
        } else {
            axios.put('/api/metadata/' + billing_line_2_id, JSON.stringify({field: fromState.b_address2}), tokenConfig())
        }
    }
    
    if ((typeof billing_city === 'undefined' || billing_city.field !== fromState.b_zipCode) && fromState.b_zipCode !== '') {
        if (billing_city_id === -1) {
            axios.post('/api/metadata', JSON.stringify({type:'billing_city', field: fromState.b_zipCode, user: '/api/users/' + userId}), tokenConfig())
        } else {
            axios.put('/api/metadata/' + billing_city_id, JSON.stringify({field: fromState.b_zipCode}), tokenConfig())
        }
    }
};

export const getUserFromDb = async (id) => {
    return await axios.get('/api/users/' + id);
}