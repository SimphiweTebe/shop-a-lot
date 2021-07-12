import React from 'react'
import './filter.scss'
import { useDispatch } from 'react-redux'
import { filterShopList } from '../../redux/actions/storeActions'

function Filter() {

    const dispatch = useDispatch()

    const getCategory = event => {
        const target = event.target
        dispatch(filterShopList(target.id))
    }

    return (
        <div className="product-filter">
            <form className=" form container">
                <div className="filter-group">
                    <div className="filter-group__item">
                        <input type="radio" name="category" id="all" onClick={getCategory} defaultChecked/>
                        <label htmlFor="all">All</label>
                    </div>
                    <div className="filter-group__item">
                        <input type="radio" name="category" id="footwear" onClick={getCategory}/>
                        <label htmlFor="footwear">Footwear</label>
                    </div>
                    <div className="filter-group__item">
                        <input type="radio" name="category" id="clothing" onClick={getCategory} />
                        <label htmlFor="clothing">Clothing</label>
                    </div>
                    <div className="filter-group__item">
                        <input type="radio" name="category" id="accessories" onClick={getCategory} />
                        <label htmlFor="accessories">Accessories</label>
                    </div>
                </div>
            </form>
        </div>
    )
}

export default Filter
