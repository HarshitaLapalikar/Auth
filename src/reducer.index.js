import { combineReducers } from 'redux';
import auth from './Redux/reducer';
import topten from './TopTen/TopTenReducer';

const reducer = combineReducers({
    auth,
    topten
}) 

export default reducer;