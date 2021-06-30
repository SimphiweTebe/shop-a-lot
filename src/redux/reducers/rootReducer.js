import {combineReducers} from 'redux';
import featuredReducer from './featuredReducer';
import cartReducer from './cartReducer';
import storeReducer from './storeReducer';

const rootReducer = combineReducers({
    storeList: storeReducer,
    featuredList: featuredReducer,
    cart: cartReducer
})

export default rootReducer