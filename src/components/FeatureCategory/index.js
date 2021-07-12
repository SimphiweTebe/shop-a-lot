import React from 'react'
import './featured.scss'
import FeatureItem from './FeatureItem'
import clothing from '../../images/featured/clothing.jpg'
import footwear from '../../images/featured/footwear.jpg'
import accessories from '../../images/featured/accessories.jpg'

const features = [
    {
        id: 1,
        title: 'Clothing',
        image: clothing
    },
    {
        id: 2,
        title: 'Footwear',
        image: footwear
    },
    {
        id: 3,
        title: 'Accessories',
        image: accessories
    }
]

function FeatureCategory() {
    
    const [state] = React.useState(features)

    return (
        <section className="featured">
           {
               state.map(item => (<FeatureItem key={item.id} item={item} />))
           }
        </section>
    )
}

export default FeatureCategory
