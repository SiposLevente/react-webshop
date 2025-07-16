import React, { useEffect, useState } from 'react'
import { CartProvider, ShoeProvider } from '../contexts'

const ShopContext = ({ children }) => {
    const [cart, setCart] = useState([])

    useEffect(() => {
        const storedCartContent = JSON.parse(sessionStorage.getItem("cartContent"))
        const localCart = !storedCartContent ? [] : storedCartContent;
        setCart(localCart)
    }, [])

    return (
        <CartProvider.Provider value={{ cart, setCart }} >
            {children}
        </CartProvider.Provider >
    )
}

const ShoeContext = ({ children }) => {
    const [shoes, setShoes] = useState([])

    useEffect(() => {
        fetch('/data/shoeDatabase.json')
            .then(resp => resp.json())
            .then(data => setShoes(data))
            .catch(err => console.error("Error fetching shoes! (" + err + ")"))
    }, [])

    return (
        <ShoeProvider.Provider value={shoes} >
            {children}
        </ShoeProvider.Provider >
    )
}

export { ShopContext, ShoeContext }