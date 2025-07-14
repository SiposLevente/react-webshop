import React, { useEffect, useState } from 'react'
import { ShopProvider } from '../contexts'

const ShopContext = ({ children }) => {
    const [cart, setCart] = useState([])

    useEffect(() => {
        sessionStorage.setItem("cartContent", JSON.stringify([{ uuid: "abcd", name: "almaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa", count: 2, price: 200, description: "valami", img: "/vite.svg" }, { uuid: "abcc", name: "almaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa", count: 1, price: 200, description: "valami", img: "/vite.svg" }]));
        const localCart = JSON.parse(sessionStorage.getItem("cartContent"));
        setCart(localCart)
    }, [])

    return (
        <ShopProvider.Provider value={{ cart, setCart }} >
            {children}
        </ShopProvider.Provider >
    )
}

export default ShopContext