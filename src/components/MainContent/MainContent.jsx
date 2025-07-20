import React, { useContext, useEffect, useState } from 'react'
import './MainContent.css'
import ShoeCard from './ShoeCard'
import { FilterProvider, ShoeProvider } from '../../contexts'

const MainContent = () => {
    const shoes = useContext(ShoeProvider)
    const { filterSettings, _ } = useContext(FilterProvider)

    const [filteredShoes, setFilteredShoes] = useState(shoes)

    /*
    filterSettings= {searchBar: '', brandSelected: '', priceFilter: {enabled: false, min: 0, max: 0}, tags: []}
     */

    useEffect(() => {
        let result = shoes

        if (filterSettings.searchBar.trim() !== '') {
            const search = filterSettings.searchBar.toLowerCase()
            result = result.filter(shoe =>
                shoe.name.toLowerCase().includes(search) ||
                shoe.description.toLowerCase().includes(search)
            )
        }

        if (filterSettings.brandSelected.trim() !== '') {
            result = result.filter(shoe => shoe.brand === filterSettings.brandSelected)
        }

        if (filterSettings.priceFilter.enabled) {
            result = result.filter(shoe =>
                shoe.price >= filterSettings.priceFilter.min &&
                shoe.price <= filterSettings.priceFilter.max
            )
        }

        if (filterSettings.tags.length > 0) {
            result = result.filter(shoe =>
                filterSettings.tags.every(tag => shoe.tags.includes(tag))
            )
        }

        setFilteredShoes(result)
    }, [filterSettings, shoes])

    return (
        <div id='main-content'>
            {filteredShoes.map((shoe, index) => {
                return <ShoeCard key={index} shoe={shoe} />
            })}
        </div>
    )
}

export default MainContent