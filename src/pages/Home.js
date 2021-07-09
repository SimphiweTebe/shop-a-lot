import React from 'react';
import _ from 'underscore';
import { Link } from 'react-router-dom';
import {createClient} from 'contentful';

import Hero from '../components/Hero';
import SignUp from '../components/Signup';
import LoadSpinner from '../components/LoadSpinner';

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
                <h3 className="sub-title">Just landed</h3>
                <section className="store-front">
                    {
                        featured.items.map(item => (
                            <Link className="item" key={item.sys.id} to={`/product/${item.sys.id}`}>
                                <div className="item-image" >
                                    <img src={item.fields.productThumbnail.fields.file.url} alt={item.fields.title} />
                                </div>
                                <div className="item-info">
                                    <h4 className="title">{item.fields.title.length > 25 ? item.fields.title.slice(0,30) + '...' : item.fields.title}</h4>
                                    <h4 className="price">R{item.fields.price}</h4>
                                </div>
                            </Link>
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
