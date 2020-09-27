import React, { useState } from "react";
import { RomanNumerals } from "./RomanNumerals";
import isRoman from "./RomanNumerals/isRoman";

const NumberInput = () => {
  const [input, setInput] = useState("");
  const [result, setResult] = useState("");
  const numberChange = (event) => {
    setInput(event.target.value);
  };

  const convertNumber = (event) => {
    event.preventDefault();
    if (isRoman(input)) {
      const number = RomanNumerals.fromRoman(input);
      setResult(String(number));
      return;
    }

    const output = RomanNumerals.toRoman(Number(input));
    setResult(output);
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
      {!!result.length && (
        <div>
          your expected output is <strong>{result}</strong>
        </div>
      )}
    </div>
  );
};

export default NumberInput;
