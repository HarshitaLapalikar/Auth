import * as actionTypes from '../TopTen/TopTen.ActionTypes';


const initialState = {
    loading : false,
    error: null,
    topten_dish : [],
}

const topten_reducer = (state = initialState, action) => {
    switch(action.type ){
        case actionTypes.TOPTEN_START:
        return{...state, loading : true }
        case actionTypes.TOPTEN_SUCCESS:
        return{...state, topten_dish: action.payload, loading: false }
        case actionTypes.TOPTEN_FAILURE:
        return{...state, error: action.error ,loading: false }
        default:
        return state;
    }

};

export default topten_reducer; 