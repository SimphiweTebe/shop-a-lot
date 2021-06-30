import React from 'react'
import './filter.scss'

function Filter() {
    return (
        <div className="product-filter container">
            <form>
                <p>Filter products by category:</p>
                <div className="filter-group">
                    <div className="filter-group__item">
                        <label htmlFor="">Item</label>
                        <input type="radio" name="category" id="" />
                    </div>
                    <div className="filter-group__item">
                        <label htmlFor="">Item</label>
                        <input type="radio" name="category" id="" />
                    </div>
                    <div className="filter-group__item">
                        <label htmlFor="">Item</label>
                        <input type="radio" name="category" id="" />
                    </div>
                </div>
            </form>
        </div>
    )
}

export default Filter
