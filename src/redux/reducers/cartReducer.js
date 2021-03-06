import * as ACTION from '../actions/TYPES';

const initialState = {
    cartList: [],
}

const cartReducer = (state = initialState, action) => {

    switch(action.type){

        case ACTION.ADD_TO_CART:
            
            const inCart = state.cartList.find(item => item.sys.id === action.payload.sys.id ? true : false)
            
            return {
                ...state,
                cartList: inCart ? state.cartList.map(item => item.sys.id === action.payload.sys.id ? {...item, qty: item.qty + 1} : item)
                : [...state.cartList, {...action.payload, qty: 1}]
            }

        case ACTION.REMOVE_FROM_CART:
            
            return {
                ...state,
                cartList: state.cartList.filter(item => item.sys.id !== action.payload)
            }

        case ACTION.INCREMENT_CART:
            
            return {
                ...state,
                cartList: state.cartList.map(item => item.sys.id === action.payload.id ? {...item, qty: item.qty + 1} : item)
            }
        
        case ACTION.DECREMENT_CART:
            
            return {
                ...state,
                cartList: state.cartList.map(item => item.sys.id === action.payload.id ? {...item, qty: item.qty - 1} : item)
            }
        
        default:
            return state;
    }
}

export default cartReducer;