import * as actionTypes from './actionTypes';


const initialState = {
    token : null,
    loading : false,
    userName : [],
    error : null,
}

const reducer = (state = initialState, action) => {
    switch(action.type){
        case actionTypes.AUTH_START:
        return{...state,  loading:true};
        case actionTypes.AUTH_SUCCESS:
        return{...state, token: action.payload,loading:false};
        case actionTypes.AUTH_FAIL:
        return{...state, error: action.error, loading:false};
        default:
        return state;
    }

    

};

export default reducer;