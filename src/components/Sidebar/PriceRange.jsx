import React, { useEffect, useState } from 'react'

const PriceRange = () => {
    const [filterPrice, setFilterPrice] = useState(true)
    const [minValue, setMinValue] = useState(0)
    const [maxValue, setMaxValue] = useState(0)

    const toggleFilter = () => {
        setFilterPrice(!filterPrice)
    }

    const handleMaxValueChange = (e) => {
        if (e.target.value < 0) {
            e.target.value = 0
        }
        setMaxValue(e.target.value)
    }

    const handleMinValueChange = (e) => {
        if (e.target.value < 0) {
            e.target.value = 0
        }
        setMinValue(e.target.value)
    }

    useEffect(() => {
        if (Number(minValue) > Number(maxValue)) {
            setMaxValue(minValue)
        }

    }, [minValue, maxValue])


    return (
        <div>
            <div id='sidebar-subsection'>Price Range</div>
            <input onChange={() => toggleFilter()} value={filterPrice} checked={filterPrice} id='sidebar-pricerange-applied' type='checkbox' />
            <div>
                <div id='pricerange-label'>Minimum Price (€)</div>
                <input value={minValue} onChange={handleMinValueChange} id='minimal-price-input' type="number" />
            </div>
            <div>
                <div id='pricerange-label'>Maximum Price (€)</div>
                <input value={maxValue} onChange={handleMaxValueChange} id='maximum-price-input' type="number" />
            </div>
        </div>
    )
}

export default PriceRange