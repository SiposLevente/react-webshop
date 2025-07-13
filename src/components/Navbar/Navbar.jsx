import Cart from './Cart'
import './Navbar.css'
import SearchBar from './SearchBar'


const Navbar = () => {
    return (
        <div id='navbar'>
            <div id='navbar-content'>
                <span>
                    <img id='icon' src="/vite.svg" alt="icon" />
                </span>
                <span id='navbar-title'>ShoeShop Extra</span>
                <SearchBar />
                <Cart />
            </div>
        </div>
    )
}

export default Navbar