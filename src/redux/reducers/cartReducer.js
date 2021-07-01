import * as ACTION from '../actions/TYPES';

const initialState = {
    cartList: [],
}

const cartReducer = (state = initialState, action) => {

    switch(action.type){

        case ACTION.ADD_TO_CART:
            
            const inCart = state.cartList.find(item => item.id === action.payload.id ? true : false)
            
            return {
                ...state,
                cartList: inCart ? state.cartList.map(item => item.id === action.payload.id ? {...item, qty: item.qty + 1} : item)
                : [...state.cartList, {...action.payload, qty: 1}]
            }

        case ACTION.REMOVE_FROM_CART:

            console.log(action.payload)
            
            return {
                ...state,
                cartList: state.cartList.filter(item => item.id !== action.payload)
            }
        
        default:
            return state;
    }
}

export default cartReducer;