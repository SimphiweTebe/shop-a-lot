import * as ACTION from '../actions/TYPES';

const initialState = {
    loading: false,
    items: [],
    error: ''
}

const storeReducer = (state = initialState, action) => {

    switch(action.type){

        case ACTION.STORE_LIST_LOADING:
            return {
                ...state,
                loading: true,
                error: ''
            }
        case ACTION.STORE_LIST_FAIL:
            return {
                ...state,
                loading: false,
                error: action.payload
            }
        case ACTION.STORE_LIST_SUCCESS:
            return {
                ...state,
                loading: false,
                error: '',
                items: action.payload
            }
        default:
            return state;
    }
}

export default storeReducer;