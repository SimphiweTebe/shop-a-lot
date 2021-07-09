import React from 'react'
import './filter.scss'
import { useDispatch } from 'react-redux'
import { filterShopList } from '../../redux/actions/storeActions'

function Filter() {

    const dispatch = useDispatch()
    const getCategory = event => {
        dispatch(filterShopList(event.target.id))
    }

    return (
        <div className="product-filter">
            <form className=" form container">
                <p>Showing:</p>
                <div className="filter-group">
                    <div className="filter-group__item">
                        <input type="radio" name="category" id="all" onClick={getCategory} />
                        <label htmlFor="">All</label>
                    </div>
                    <div className="filter-group__item">
                        <input type="radio" name="category" id="sneakers" onClick={getCategory}/>
                        <label htmlFor="">Sneakers</label>
                    </div>
                    <div className="filter-group__item">
                        <input type="radio" name="category" id="jackets" onClick={getCategory} />
                        <label htmlFor="">Jackets</label>
                    </div>
                    <div className="filter-group__item">
                        <input type="radio" name="category" id="jeans" onClick={getCategory} />
                        <label htmlFor="">Jeans</label>
                    </div>
                    <div className="filter-group__item">
                        <input type="radio" name="category" id="accessories" onClick={getCategory} />
                        <label htmlFor="">Accessories</label>
                    </div>
                </div>
            </form>
        </div>
    )
}

export default Filter
