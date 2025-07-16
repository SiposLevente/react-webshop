import React, { useContext } from 'react'
import { ShoeProvider } from '../../contexts'

const TagFilter = () => {
    const shoes = useContext(ShoeProvider)
    const getUniqueTags = () => [...new Set(shoes.flatMap(shoe => shoe.tags || []))];



    return (
        <div>
            <h1>Tags</h1>
            <div>
                {getUniqueTags().map((tag, index) => {
                    return <div key={index}>{tag}</div>
                })}
            </div>
        </div>
    )
}

export default TagFilter