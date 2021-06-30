import * as ACTION from '../actions/TYPES';

const initialState = {
    loading: false,
    items: [],
    error: ''
}

const productReducer = (state = initialState, action) => {

    switch(action.type){

        case ACTION.FEATURED_LIST_LOADING:
            return {
                ...state,
                loading: true,
                error: ''
            }
        case ACTION.FEATURED_LIST_FAIL:
            return {
                ...state,
                loading: false,
                error: action.payload
            }
        case ACTION.FEATURED_LIST_SUCCESS:
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

export default productReducer;