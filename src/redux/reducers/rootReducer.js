import {combineReducers} from 'redux';
import cartReducer from './cartReducer';
import storeReducer from './storeReducer';
import filteredReducer from './filteredReducer';

const rootReducer = combineReducers({
    storeList: storeReducer,
    filteredList: filteredReducer,
    cart: cartReducer
})

export default rootReducer