import React from 'react';
import _ from 'underscore';
import {createClient} from 'contentful';

import Hero from '../components/Hero';
import SignUp from '../components/Signup';
import LoadSpinner from '../components/LoadSpinner';
import FeatureCategory from '../components/FeatureCategory';
import GridItem from '../components/GridItem';

// CONTENTFUL
const store = createClient({
    space: 'xqdklds0mr1n',
    accessToken: process.env.REACT_APP_CONTENTFUL_KEY
})

function Home() {
    
    const [featured, setFeatured] = React.useState([])
    const [loading, setLoading] = React.useState(false)
    const [errors, setErrors] = React.useState('')

    React.useEffect(()=> {
        getFeatured()
        window.scrollTo(0,0)
    },[])

    const getFeatured = async () => {
        
        try{
            setLoading(true)
            const res = await store.getEntries({ 
                content_type: 'dripStore',
                'fields.featuredProduct': true,
            })
            setFeatured(res)
            setLoading(false)
        }catch(error){
            setLoading(false)
            setErrors(error)
        }
        
    }

    const renderStore = ()=> {
        if(loading){
            return (
                <LoadSpinner />
            )
        }
        if(errors){
            return (
                <div className="error">
                    <h3>{errors.message}</h3>
                </div>
            )
        }
        if(!_.isEmpty(featured)){
            return (
                <>
                <FeatureCategory />
                <h3 className="sub-title">New Arrivals</h3>
                <section className="store-front">
                    {
                        featured.items.map(item => (
                            <GridItem key={item.sys.id} item={item}/>
                        ))
                    }
                </section>
                </>
            )
        }
    }

    return (
        <main className="page">
            <Hero />
            {
                renderStore()
            }
            <SignUp />
        </main>
    )
}

export default Home
