import React, { useContext, useEffect, useRef, useState } from 'react'
import './Navbar.css'
import { FilterProvider } from '../../contexts'

const SearchBar = () => {
    const { filterSettings, setFilterSettings } = useContext(FilterProvider)

    const [searchBarContent, setSearchBarContent] = useState("")
    const searchBarRef = useRef({})

    const clearSearchBar = () => {
        setSearchBarContent("");
        searchBarRef.current.focus()
    }

    const searchBarUpdate = (e) => {
        setSearchBarContent(e.target.value);
    }

    useEffect(() => {
        setFilterSettings({ ...filterSettings, searchBar: searchBarContent })
    }, [searchBarContent])


    return (
        <span>
            <form onSubmit={(e) => e.preventDefault()} id='navbar-search'>
                <input ref={searchBarRef} value={searchBarContent} onChange={searchBarUpdate} type="text" placeholder="Search..."></input>
                <button onClick={clearSearchBar} id='reset-button'>X</button>
            </form>
        </span>
    )
}

export default SearchBar