import React from 'react'

const ShoeCard = ({ shoe }) => {

    return (
        <div className='shoe-card'>
            <img className='shoe-card-img' src={shoe.img} />
            <div className='shoe-card-name'>{shoe.name}</div>
            <div className='shoe-card-price'>{shoe.price} €</div>
            <button className='shoe-card-cart-button'>Add to cart</button>
        </div>
    )
}

export default ShoeCard


/*
    {
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

*/