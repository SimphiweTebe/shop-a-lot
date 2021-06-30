import axios from 'axios';
import * as ACTION from './TYPES'

export const getShopList = () => {
    return async dispatch => {
        try{
            dispatch({
                type: ACTION.STORE_LIST_LOADING
            })

            const res = await axios.get(`https://fakestoreapi.com/products`)

            dispatch({
                type: ACTION.STORE_LIST_SUCCESS,
                payload: res.data
            })
        }catch(err){
            dispatch({
                type: ACTION.STORE_LIST_FAIL,
                payload: err
            })
        }
    }
}
export const getFeatured = () => {
    return async dispatch => {
        try{
            dispatch({
                type: ACTION.FEATURED_LIST_LOADING
            })

            const res = await axios.get(`https://fakestoreapi.com/products?limit=4`)

            dispatch({
                type: ACTION.FEATURED_LIST_SUCCESS,
                payload: res.data
            })
        }catch(err){
            dispatch({
                type: ACTION.FEATURED_LIST_FAIL,
                payload: err
            })
        }
    }
}