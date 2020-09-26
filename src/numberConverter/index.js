export const dictionary = {
  1: "I",
  4: "IV",
  5: "V",
  9: "IX",
  10: "X",
  40: "XL",
  50: "L",
  90: "XC",
  100: "C",
  400: "CD",
  500: "D",
  900: "CM",
  1000: "M",
};
const numbers = Object.keys(dictionary).reverse();

const numberToRomanConverter = (num) => {
  let i = 0;
  let roman = "";
  while (num > 0) {
    const subtract = numbers[i];
    if (subtract > num) {
      i++;
    } else {
      num -= subtract;
      roman += dictionary[subtract];
    }
  }
  return roman;
};

export default numberToRomanConverter;
