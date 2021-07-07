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

 export const adjustCartQTY = (id) => {
    return {
         type: ACTION.REMOVE_FROM_CART,
         payload: id
     }
 }