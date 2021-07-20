import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getShopList } from '../redux/actions/storeActions';
import _ from 'underscore';
import LoadSpinner from '../components/LoadSpinner';
import Filter from '../components/Filter';
import GridItem from '../components/GridItem';

function Shop() {
    const dispatch = useDispatch();
    const shopFront = useSelector(state => state.storeList)
    const filteredList = useSelector(state => state.filteredList)

    React.useEffect(()=> {
        dispatch(getShopList())
        window.scrollTo(0,0)
    },[dispatch])

    const renderStore = () => {
        if(shopFront.loading || filteredList.loading){
            return (
                <LoadSpinner />
            )
            
        }
        if(shopFront.error || filteredList.error){
            return (
                <div className="error">
                    <h3>{shopFront.error || filteredList.error}</h3>
                </div>
            )
        }
        if(!_.isEmpty(shopFront)){

            const products = !_.isEmpty(filteredList.items) ? filteredList.items : shopFront.items
            
            return (
                <section className="store-front">
                    {
                        products && products.map(item => (
                            <GridItem key={item.sys.id} item={item}/>
                        ))
                    }
                </section>
            )
        }
    }

    return (
        <main className="page">
            <div className="shop-page">
                <Filter />
                {
                    renderStore()
                }
            </div>
        </main>
    )
}

export default Shop
