import React from 'react'
import './Sidebar.css'
import BrandFilter from './BrandFilter'
import PriceRange from './PriceRange'
import TagFilter from './TagFilter'

const Sidebar = () => {
    return (
        <div id='sidebar'>
            <h1>Filters</h1>
            <BrandFilter />
            <PriceRange />
            <TagFilter />
        </div>
    )
}

export default Sidebar