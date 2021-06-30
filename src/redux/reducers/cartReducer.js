import * as ACTION from '../actions/TYPES';

const initialState = {
    cartList: [],
}

const cartReducer = (state = initialState, action) => {

    switch(action.type){

        case ACTION.ADD_TO_CART:
            
            // const inCart = state.cartList.findIndex(item => item.id === action.payload.id)
            
            return {
                ...state,
                cartList: [...state.cartList, action.payload]
            }

        case ACTION.REMOVE_FROM_CART:
        
            const inCart = state.cartList.filter(item => item.id !== action.payload.id)
            
            return {
                ...state,
                cartList: [...state.cartList, action.payload]
            }
        
        default:
            return state;
    }
}

export default cartReducer;