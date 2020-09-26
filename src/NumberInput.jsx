import React, { useState } from "react";
import { RomanNumerals } from "./RomanNumerals";
import isRoman from "./RomanNumerals/isRoman";

const NumberInput = () => {
  const [input, setInput] = useState("");
  const [output, setOutput] = useState("");
  const numberChange = (event) => {
    setInput(event.target.value);
  };

  const convertNumber = (event) => {
    event.preventDefault();
    if (isRoman(input)) {
      RomanNumerals.fromRoman(input);
    }

    const output = RomanNumerals.toRoman(Number(input));
    setOutput(output);
  };

  return (
    <div className="wrapper">
      <form onSubmit={convertNumber}>
        <input
          className="input"
          onChange={numberChange}
          value={input}
          placeholder="write roman or decimal number"
        />
        <button type="submit">convert</button>
      </form>
      {!!output.length && (
        <div>
          your expected output is <strong>{output}</strong>
        </div>
      )}
    </div>
  );
};

export default NumberInput;
