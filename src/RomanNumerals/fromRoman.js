const romanDictionary = {
  I: 1,
  IV: 4,
  V: 5,
  IX: 9,
  X: 10,
  XL: 40,
  L: 50,
  XC: 90,
  C: 100,
  CD: 400,
  D: 500,
  CM: 900,
  M: 1000,
};

const exceptionNumbers = ["IV", "IX", "XL", "XC", "CD", "CM"];

const romanNumbers = Object.keys(romanDictionary);

const romanToNumberConverter = (roman) => {
  let output = 0;

  exceptionNumbers.forEach((key) => {
    if (roman.includes(key)) {
      output += romanDictionary[key];
      roman = roman.split(key).join("");
    }
  });

  roman.split("").forEach((key) => {
    output += romanDictionary[key];
    roman = roman.split(key).join("");
  });

  return output;
};

export default romanToNumberConverter;
