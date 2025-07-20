import React, { useContext, useEffect, useState } from 'react'
import './Navbar.css'
import { CartProvider } from '../../contexts'
import CartCard from './CartCard'

const Cart = () => {
    const { cart, _ } = useContext(CartProvider)
    const [showCart, setShowCart] = useState(false)
    const [itemCount, setItemCount] = useState(0)

    const displayCart = () => {
        setShowCart(!showCart)
    }

    useEffect(() => {
        const totalCount = cart.reduce((sum, item) => sum + item.count, 0)
        setItemCount(totalCount)
    }, [cart])



    return (
        <div>
            <div id='navbar-cart' onClick={displayCart} >Cart ({itemCount})</div>
            <CartCard cartActions={{ showCart, setShowCart }} />
        </div>
    )
}

export default Cart


/**
 * {
        "uuid": "29",
        "name": "Dash Elite",
        "price": 140,
        "description": "Elite performance and sleek looks",
        "img": "/shoes/dash-elite.png",
        "brand": "AetherRun",
        "tags": [
            "style",
            "performance",
            "speed"
        ]
    },
 * 
 * 
 */