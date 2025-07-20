import React, { useContext, useEffect } from 'react'
import { CartProvider } from '../../contexts'

const ShoeCard = ({ shoe }) => {
    const { cart, setCart } = useContext(CartProvider)

    const addToCart = (shoeToAdd) => {
        const existingItem = cart.find(item => item.uuid === shoeToAdd.uuid)

        if (existingItem) {
            const updatedCart = cart.map(item =>
                item.uuid === shoeToAdd.uuid
                    ? { ...item, count: item.count + 1 }
                    : item
            )
            setCart(updatedCart)
        } else {
            setCart([...cart, { ...shoeToAdd, count: 1 }])
        }
    }

    useEffect(() => {
        sessionStorage.setItem("cartContent", JSON.stringify(cart));
    }, [cart])

    return (
        <div className='shoe-card'>
            <img className='shoe-card-img' src={shoe.img} alt={shoe.name} />
            <div className='shoe-card-name'>{shoe.name}</div>
            <div className='shoe-card-price'>{shoe.price} €</div>
            <button onClick={() => addToCart(shoe)} className='shoe-card-cart-button'>
                Add to cart
            </button>
        </div>
    )
}

export default ShoeCard
