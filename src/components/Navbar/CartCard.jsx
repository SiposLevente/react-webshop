import React, { useContext } from 'react'
import { ShopProvider } from '../../contexts'
import CartItemCard from './CartItemCard'

const CartCard = ({ cartActions }) => {
    const { cart, setCart } = useContext(ShopProvider)

    const displayCart = () => {
        return (<div>
            {cart.map((element, index) => {
                return <CartItemCard key={index} element={element} />
            })}
        </div>)
    }

    const emptyCart = () => {
        setCart([])
    }

    return cartActions.showCart && (
        <div id='navbar-cart-card'>
            <button id='navbar-cart-card-close-button' onClick={() => cartActions.setShowCart(false)}>X</button>
            <h1>Cart</h1>
            <button onClick={emptyCart}>Empty cart!</button>
            {cart.length > 0 ? displayCart() : <p>Your cart is empty!</p>}
        </div>
    )
}

export default CartCard