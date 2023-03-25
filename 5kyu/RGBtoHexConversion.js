function rgb(r, g, b){
  const convert = num => {
    // Edge cases
    if (num >= 255) {
      return 'FF'
    } else if (num <= 0) {
      return '00';
    }
    
    // Not edge case
    const quotient =  Math.floor(num / 16);
    const remainder = num % 16;
    
    const charcodeZero = 48; // 0
    const charcodeLetter = 48 + 7; // A

    const convertDigit = digit => {
      if (digit === 0) {
        return '0';
      } else if (digit >= 15) {
        return 'F';
      } else if (digit > 9) {
        return String.fromCharCode(charcodeLetter + digit);
      } else {
        return String.fromCharCode(charcodeZero + digit);
      }
    }
    return convertDigit(quotient) + convertDigit(remainder);
  }
  
  return convert(r) + convert(g) + convert(b);
}