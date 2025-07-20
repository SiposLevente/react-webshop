import React, { useContext, useEffect, useState } from 'react'
import { FilterProvider } from '../../contexts'

const PriceRange = () => {
    const [filterPrice, setFilterPrice] = useState(false)
    const [minValue, setMinValue] = useState(0)
    const [maxValue, setMaxValue] = useState(0)

    const { filterSettings, setFilterSettings } = useContext(FilterProvider)

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
        setFilterSettings({ ...filterSettings, priceFilter: { ...filterSettings.priceFilter, min: e.target.value } })
    }

    useEffect(() => {
        setFilterSettings({ ...filterSettings, priceFilter: { ...filterSettings.priceFilter, enabled: filterPrice } })
    }, [filterPrice])

    useEffect(() => {
        if (Number(minValue) > Number(maxValue)) {
            setMaxValue(minValue)
            setFilterSettings({ ...filterSettings, priceFilter: { ...filterSettings.priceFilter, max: minValue } })
        } else {
            setFilterSettings({ ...filterSettings, priceFilter: { ...filterSettings.priceFilter, max: maxValue } })
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