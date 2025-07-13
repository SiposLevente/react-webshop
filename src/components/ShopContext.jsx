import React, { useState } from 'react'
import { ShopProvider } from '../contexts'

const ShopContext = ({ children }) => {
    const [cart, setCart] = useState([{ uudi: "abcd", name: "alma", count: 1, price: 200, description: "valami", img: "/public/vite.svg" },])

    return (
        <ShopProvider.Provider value={{ cart, setCart }} >
            {children}
        </ShopProvider.Provider >
    )
}

export default ShopContext