import * as ACTION from './TYPES'

export const addToCart = (item) => {
   return {
        type: ACTION.ADD_TO_CART,
        payload: item
    }
}

export const removeCart = (id) => {
    return {
         type: ACTION.REMOVE_FROM_CART,
         payload: id
     }
 }

 export const incrementCart = (id, qty) => {
    return {
         type: ACTION.INCREMENT_CART,
         payload: {id, qty}
     }
 }

 export const decrementCart = (id, qty) => {
    return {
         type: ACTION.DECREMENT_CART,
         payload: {id, qty}
     }
 }