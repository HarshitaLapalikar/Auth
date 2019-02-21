import * as actionTypes from './actionTypes';
import { createBrowserHistory } from 'history';

// export const authStart = () => {
//     return{
//         type: actionTypes.AUTH_START
//     };
// };

// export const authSuccess = (authData) => {
//     return {
//         type: actionTypes.AUTH_SUCCESS,
//         authData: authData
//     };
// };

//     export const logout = () => {
//     userName.logout();
//     return{
//         type: userName.LOGOUT
//     };
// };

export const history = createBrowserHistory();

// export const authFail = (error) => {
//     return{
//         type: actionTypes.AUTH_FAIL,
//         error: error
//     };
// };

export const auth = (values) => {
        return dispatch => {
        fetch("http://18.223.218.199:8080/api/v1.0/users/login/",{

            method: "POST",
            headers: {
                'Content-Type': 'application/json',
                "Accept": 'application/json'
            },
            body: JSON.stringify(values)
        })
        .then(response =>response.json())
        .then(response => {
            
            console.log(response, "response");  
            //alert("logged in")
            
            //     console.log("api successful", response);
                localStorage.setItem("token", response.token);
            //     alert("before dispatch");
                dispatch({
                     type: actionTypes.AUTH_SUCCESS,
                     payload: response.token
                })
               // alert("after dispatch");
            
           // alert("outside if")
              console.log(localStorage.getItem('token'), "token");
              window.location.href = "/home";
        
    })  
            .catch(err => {
                console.log('error', err)
                alert("Authentication failed");
            })
         
         }
        
        
   };

   export const getToken = () => {
       return(dispatch) => {
           const promise = new Promise((resolve, reject) => {
               var tokenfromStorage = localStorage.getItem('token')
              if(tokenfromStorage){
                  console.log(tokenfromStorage, 'TokenfromStorage')
                  resolve(tokenfromStorage);
                }
                    else{
                        console.log('error getting token')
                        reject(null);
                    }
           })

           return promise;
       }
   }
