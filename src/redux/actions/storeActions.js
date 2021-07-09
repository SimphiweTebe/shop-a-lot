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
export const filterShopList = (category) => {
    return async dispatch => {
        try{
            dispatch({
                type: ACTION.FILTERED_LIST_LOADING
            })

            const res = await store.getEntries({'metadata.tags.sys.id[in]': category})

            dispatch({
                type: ACTION.FILTERED_LIST_SUCCESS,
                payload: res.items
            })
        }catch(err){
            dispatch({
                type: ACTION.FILTERED_LIST_FAIL,
                payload: err
            })
        }
    }
}
