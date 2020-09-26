import romanDictionary from "./romanDictionary";

const numbers = Object.keys(romanDictionary).reverse();

const numberToRomanConverter = (num) => {
  let i = 0;
  let roman = "";
  while (num > 0) {
    const subtract = numbers[i];
    if (subtract > num) {
      i++;
    } else {
      num -= subtract;
      roman += romanDictionary[subtract];
    }
  }
  return roman;
};

export default numberToRomanConverter;
