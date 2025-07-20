import React, { useContext, useEffect, useState } from 'react'
import { CartProvider } from '../../contexts'
import CartItemCard from './CartItemCard'

const CartCard = ({ cartActions }) => {
    const { cart, setCart } = useContext(CartProvider)
    const [cartTotal, setCartTotal] = useState(0)

    const displayCart = () => {


        return (<div>
            {cart.map((element, index) => {
                return <CartItemCard key={index} element={element} />
            })}
        </div>)
    }

    useEffect(() => {
        setCartTotal(cart.reduce((sum, item) => sum + (item.price * item.count), 0));
    }, [cart])

    const emptyCart = () => {
        setCart([])
    }

    return cartActions.showCart && (
        <div id='navbar-cart-card'>
            <button id='navbar-cart-card-close-button' onClick={() => cartActions.setShowCart(false)}>X</button>
            <h1>Cart</h1>
            <button id='cart-card-clear-button' onClick={emptyCart}>Empty cart!</button>
            {cart.length > 0 ? displayCart() : <p>Your cart is empty!</p>}
            {cart.length > 0 ? <div id='cart-card-total'>Total: {cartTotal}€</div> : <div></div>}
        </div>
    )
}

export default CartCard