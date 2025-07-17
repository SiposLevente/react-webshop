import React, { useContext } from 'react'
import './MainContent.css'
import ShoeCard from './ShoeCard'
import { ShoeProvider } from '../../contexts'

const MainContent = () => {
    const shoes = useContext(ShoeProvider)

    return (
        <div id='main-content'>
            {shoes.map((shoe, index) => {
                return <ShoeCard key={index} shoe={shoe} />
            })}
        </div>
    )
}

export default MainContent