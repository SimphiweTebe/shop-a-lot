import React from 'react'
import {Link} from 'react-router-dom'

function GridItem({item}) {
    return (
        <Link className="item" key={item.sys.id} to={`/product/${item.sys.id}`}>
            <div className="item-image" >
                <img src={item.fields.productThumbnail.fields.file.url} alt={item.fields.title} />
            </div>
            <div className="item-info">
                <h4 className="title">{item.fields.title.length > 25 ? item.fields.title.slice(0,25) + '...' : item.fields.title}</h4>
                <h4 className="price">R{item.fields.price}</h4>
            </div>
        </Link>
    )
}

export default GridItem
