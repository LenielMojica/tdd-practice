export const cipher=(str,factor)=>{
    const alphabet = [
      "a",
      "b",
      "c",
      "d",
      "e",
      "f",
      "g",
      "h",
      "i",
      "j",
      "k",
      "l",
      "m",
      "n",
      "o",
      "p",
      "q",
      "r",
      "s",
      "t",
      "u",
      "v",
      "w",
      "x",
      "y",
      "z",
      
    ];
const matching = [...str]

 ;

return matching
  .map((char) => {
  
      const isCapital = char === char.toUpperCase();
    const foundChar =
      alphabet.indexOf(char.toLowerCase()) !== -1
        ? alphabet.indexOf(char.toLowerCase())
        : char;
    const newMessage =
      typeof foundChar != "number"
        ? foundChar
        : isCapital
          ? alphabet[(foundChar + factor) % alphabet.length].toUpperCase()
          : alphabet[(foundChar + factor) % alphabet.length];
    return newMessage;
  })
  .join("");
}