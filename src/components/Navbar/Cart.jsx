import React, { useContext, useState } from 'react'
import './Navbar.css'
import { ShopProvider } from '../../contexts'
import CartCard from './CartCard'

const Cart = () => {
    const { cart, _ } = useContext(ShopProvider)
    const [showCart, setShowCart] = useState(false)

    const displayCart = () => {
        setShowCart(!showCart)
    }

    return (
        <div>
            <div id='navbar-cart' onClick={displayCart} >Cart ({cart.length})</div>
            <CartCard cartActions={{ showCart, setShowCart }} />
        </div>
    )
}

export default Cart