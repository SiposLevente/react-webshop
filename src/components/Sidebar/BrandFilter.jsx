import React, { useContext, useState } from 'react'
import { ShoeProvider } from '../../contexts'

const BrandFilter = () => {
    const shoes = useContext(ShoeProvider)
    const [selectedOption, setSelectedOption] = useState("")
    const getUniqueBrands = () => [...new Set(shoes.map(shoe => shoe.brand))];
    const handleRadioChange = (value) => { setSelectedOption(value); };


    return (
        <div>
            <h2>Brands</h2>
            {getUniqueBrands().map((brand, index) => {
                return <div key={index + "BrandRadio"}>
                    <label htmlFor={brand + "Radio"} key={index + "Label"}>{brand}</label>
                    <input
                        type='radio'
                        id={brand + "Radio"}
                        value={brand + "Radio"}
                        key={index + "Input"}
                        onChange={() => handleRadioChange(brand + "Radio")}
                        checked={selectedOption == brand + "Radio"}></input>
                </div>
            })}
            <button onClick={() => setSelectedOption("")}>Clear Selection</button>
        </div>
    )
}

export default BrandFilter