import React from 'react'
import './Sidebar.css'
import BrandFilter from './BrandFilter'
import PriceRange from './PriceRange'
import TagFilter from './TagFilter'

const Sidebar = () => {
    return (
        <div id='sidebar'>
            <div id='sidebar-title'>Filters</div>
            <hr />
            <BrandFilter />
            <hr />
            <PriceRange />
            <hr />
            <TagFilter />
        </div>
    )
}

export default Sidebar