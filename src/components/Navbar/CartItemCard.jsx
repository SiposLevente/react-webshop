import React, { useContext } from 'react'
import { ShopProvider } from '../../contexts'

const CartItemCard = ({ element }) => {
    const maxCharacters = 37
    const { cart, setCart } = useContext(ShopProvider)

    const removeItem = (id) => {
        const filteredCart = cart.filter((item) => item.uuid !== id);
        setCart(filteredCart);
        sessionStorage.setItem("cartContent", JSON.stringify(filteredCart));
    }
    return (
        <div id='cart-item'>
            <img id='cart-item-img' src={element.img} />
            <div id='cart-item-title'>{element.name.length > maxCharacters ? element.name.substring(0, maxCharacters) + "..." : element.name}</div>
            <div id='cart-item-price'>{element.count}x</div>
            <div id='cart-item-price'>{element.price}€</div>
            <button id='cart-item-delete-button' onClick={() => removeItem(element.uuid)}>X</button>
        </div >
    )
}

export default CartItemCard