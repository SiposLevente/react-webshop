import React, { useContext, useState } from 'react'
import { ShoeProvider } from '../../contexts'

const BrandFilter = () => {
    const shoes = useContext(ShoeProvider)
    const [selectedOption, setSelectedOption] = useState("")
    const getUniqueBrands = () => [...new Set(shoes.map(shoe => shoe.brand))];
    const handleRadioChange = (value) => { setSelectedOption(value); };


    return (
        <div>
            <div id='sidebar-subsection'>Brands</div>
            {getUniqueBrands().map((brand, index) => {
                return <div key={index + "BrandRadio"}>
                    <input
                        className='brandRadio'
                        type='radio'
                        id={brand + "Radio"}
                        value={brand + "Radio"}
                        key={index + "Input"}
                        onChange={() => handleRadioChange(brand + "Radio")}
                        checked={selectedOption == brand + "Radio"}></input>
                    <label className='brandLabel' htmlFor={brand + "Radio"} key={index + "Label"}>{brand}</label>
                </div>
            })}
            <button id='brand-selector-clear-button' onClick={() => setSelectedOption("")}>Clear Selection</button>
        </div>
    )
}

export default BrandFilter