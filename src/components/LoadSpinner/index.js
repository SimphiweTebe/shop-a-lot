import React from 'react'
import './spinner.css'

function LoadSpinner() {
    return (
        <div className="loader-container">
            <div className="lds-ellipsis"><div></div><div></div><div></div><div></div></div>
        </div>
    )
}

export default LoadSpinner
