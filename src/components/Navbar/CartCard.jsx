import React, { useContext } from 'react'
import { CartProvider } from '../../contexts'
import CartItemCard from './CartItemCard'

const CartCard = ({ cartActions }) => {
    const { cart, setCart } = useContext(CartProvider)

    const displayCart = () => {
        const cartSum = cart.reduce((sum, item) => sum + (item.price * item.count), 0);

        return (<div>
            {cart.map((element, index) => {
                return <CartItemCard key={index} element={element} />
            })}
            <div id='cart-card-total'>Total: {cartSum}€</div>
        </div>)
    }

    const emptyCart = () => {
        setCart([])
    }

    return cartActions.showCart && (
        <div id='navbar-cart-card'>
            <button id='navbar-cart-card-close-button' onClick={() => cartActions.setShowCart(false)}>X</button>
            <h1>Cart</h1>
            <button id='cart-card-clear-button' onClick={emptyCart}>Empty cart!</button>
            {cart.length > 0 ? displayCart() : <p>Your cart is empty!</p>}
        </div>
    )
}

export default CartCard