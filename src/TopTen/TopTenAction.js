import * as actionTypes from '../TopTen/TopTen.ActionTypes';
import { getToken } from '../Redux/action'

export const show_topten = (history) => {
    return (dispatch) => {
        dispatch({type: actionTypes.TOPTEN_START})
        dispatch(getToken())
        .then(token => {
        fetch("http://18.223.218.199:8080/api/v1.0/dish/top/", {

            method: "GET", 
            headers: {
                'Authorization' : 'Eatburp ' + token,
               'Content-Type': 'application/json',
            }
        
       })
        .then(response => response.json())
        .then(response => {
            console.log(response, "response")
            dispatch({
            
                type: actionTypes.TOPTEN_SUCCESS,
                payload: response
           })
           console.log(localStorage.getItem('token'), "token");
        })
             .catch(err => {
                 dispatch({
                     type: actionTypes.TOPTEN_FAILURE,
                     payload: err
                     
                 })
                    
             })
             .catch(err => {
                 history.push('/login');
             })
            })
    }
}