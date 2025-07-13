import React, { useRef, useState } from 'react'
import './Navbar.css'

const SearchBar = () => {
    const [searchBarContent, setSearchBarContent] = useState("")
    const searchBarRef = useRef({})

    const clearSearchBar = () => {
        setSearchBarContent("");
        searchBarRef.current.focus()
    }

    const searchBarUpdate = (e) => {
        setSearchBarContent(e.target.value);
    }

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