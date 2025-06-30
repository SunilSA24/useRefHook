import React, { useState } from "react";

function TemperatureInput() {
    const [temp, handleTemp] = useState('');
    const [feren , setFeren] = useState('');
    const [celc, setCelc] = useState('');

    const fahrenheit = () => {
        if(temp.trim() === "") return;
        const f = temp * (9 / 5) + 32;
        setFeren(f);
        handleTemp('');
    }

    const celsius = () => {
      if(temp.trim() === "") return;
        const c = (temp - 32) * (5 / 9);
        setCelc(c);
        handleTemp('');
    }

  return (
    <div>
      <label htmlFor="temp">Temp:</label>
      <input
        type="number"
        id="temp"
        value={temp}
        onChange={(event) => handleTemp(event.target.value)}
      ></input>
      <button onClick={fahrenheit}>To Fahrenheit</button>
      <button onClick={celsius}>To Celsius</button>
      <div>Fahrenheit: {feren}</div>
      <div>Celsius: {celc}</div>
    </div>
  );
}

export default TemperatureInput;