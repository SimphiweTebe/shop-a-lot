import axios from 'axios';
import {createClient} from 'contentful'
import * as ACTION from './TYPES'

// CONTENTFUL
const store = createClient({
    space: 'xqdklds0mr1n',
    accessToken: process.env.REACT_APP_CONTENTFUL_KEY
})

export const getShopList = () => {
    return async dispatch => {
        try{
            dispatch({
                type: ACTION.STORE_LIST_LOADING
            })

            const res = await store.getEntries({ 
                content_type: 'dripStore',
            })

            dispatch({
                type: ACTION.STORE_LIST_SUCCESS,
                payload: res.items
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

            const res = await store.getEntries({ 
                content_type: 'dripStore',
                'fields.featuredProduct': true,
            })

            dispatch({
                type: ACTION.FEATURED_LIST_SUCCESS,
                payload: res.items
            })
        }catch(err){
            dispatch({
                type: ACTION.FEATURED_LIST_FAIL,
                payload: err
            })
        }
    }
}
export const getSingleProduct = (id) => {

    return async dispatch => {
        try{
            dispatch({
                type: ACTION.SINGLE_ITEM_LOADING
            })

            const res = await store.getEntry(id)({ content_type: 'dripStore' })

            dispatch({
                type: ACTION.SINGLE_ITEM_SUCCESS,
                payload: res.items
            })
        }catch(err){
            dispatch({
                type: ACTION.SINGLE_ITEM_FAIL,
                payload: err
            })
        }
    }
}