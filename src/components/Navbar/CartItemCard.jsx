import React from 'react'

const CartItemCard = ({ element }) => {
    return (
        <div id='cart-item'>
            <img src={element.img} />
            <div>{element.name}</div>
            <div>{element.price}</div>
            <div></div>
            <input type='number' value={element.count}></input>
        </div >
    )
}

export default CartItemCard