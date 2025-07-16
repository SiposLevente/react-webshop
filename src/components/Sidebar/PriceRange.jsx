import React from 'react'

const PriceRange = () => {
    return (
        <div>
            <h2>Price Range</h2>
            <div>
                <div>
                    <span>Minimum Price</span>
                    <input type="number" />
                </div>
                <div>
                    <span>Maximum Price</span>
                    <input type="number" />
                </div>
            </div>
        </div>
    )
}

export default PriceRange