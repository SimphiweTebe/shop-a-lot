import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getShopList } from '../redux/actions/storeActions';
import _ from 'underscore';
import { useHistory } from 'react-router-dom';
import LoadSpinner from '../components/LoadSpinner';
import Banner from '../components/Banner';
import Filter from '../components/Filter';
import GridItem from '../components/GridItem';

function Shop() {
    const dispatch = useDispatch();
    const shopFront = useSelector(state => state.storeList.items)
    const filteredList = useSelector(state => state.filteredList.items)
    const history = useHistory()

    React.useEffect(()=> {
        dispatch(getShopList())
        window.scrollTo(0,0)
    },[dispatch])

    const renderStore = ()=> {
        if(shopFront.loading){
            return (
                <LoadSpinner />
            )
            
        }
        if(shopFront.error){
            return (
                <div className="error">
                    <h3>{shopFront.error}</h3>
                </div>
            )
        }
        if(!_.isEmpty(shopFront)){

            const product = !_.isEmpty(filteredList) ? filteredList : shopFront

            return (
                <section className="store-front">
                    {
                        product.map(item => (
                            <GridItem key={item.sys.id} item={item}/>
                        ))
                    }
                </section>
            )
        }
    }

    return (
        <main className="page">
            {/* <Banner title="Season Catalogue">
                <p className="hero-subtext">Hero subtext will go here.</p>
            </Banner> */}
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
