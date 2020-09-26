import React, { useState } from "react";

const NumberInput = () => {
  const [input, setInput] = useState("");
  const numberChange = (event) => {
    setInput(event.target.value);
  };

  const convertNumber = (event) => {
    event.preventDefault();
    setInput("");
    console.log(input);
  };

  return (
    <form onSubmit={convertNumber}>
      <input
        className="input"
        onChange={numberChange}
        value={input}
        placeholder="write roman or decimal number"
      />
      <button type="submit">convert</button>
    </form>
  );
};

export default NumberInput;
