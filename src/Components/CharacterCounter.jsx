import React, { useState } from 'react'

function CharacterCount() {
    const [number, setNumber] = useState(0);
    const [value, setValue] = useState("");

    const handleChange = (event) => {
        const value = event.target.value;
        setValue(value);
        setNumber(value.length);
    }

  return (
    <div>
        <div>Character Count: {number} </div>
        <input type="text" value={value} onChange={(e) => handleChange(e)} />
    </div>
  )
}

export default CharacterCount