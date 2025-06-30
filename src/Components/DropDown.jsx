import React, { useState } from "react";

function DropDown() {
    const [selectedOption, setSelectedOption] = useState("None");

    const options = ["Cat", "Dog", "Bird"];

    const handleChange = (event) => {
        const value = event.target.value;
        setSelectedOption(value);
    }



    return <div>
        <select id="dropDown" value={selectedOption} onChange={(e) => handleChange(e)}>
            <option value="">None</option>
            {options.map((item, index) => (
                <option key={index} value={item}>{item}</option>
            ))}
        </select>
        <div>{`You selected: ${selectedOption}, where ${selectedOption} is the value selected from dropdown`}</div>
    </div>
}

export default DropDown;