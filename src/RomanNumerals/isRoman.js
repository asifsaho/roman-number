import romanDictionary from "./romanDictionary";

export const isRoman = (string) => {
  if (!isNaN(Number(string))) return false;

  const romanChars = Object.values(romanDictionary);

  return (
    string.split("").filter((char) => romanChars.includes(char)).length ===
    string.length
  );
};

export default isRoman;
