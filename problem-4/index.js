function isPalindrom(number) {
  const numberString = number.toString();
  for (let i = 0; i < Math.floor(numberString.length / 2); i++) {
    if (numberString[i] !== numberString[numberString.length - 1 - i]) {
      return false
    }
  }
  return true;
}

function highestPalindrom(limit) {
  let bigValue = 1;
  for (let i = 1; i < limit; i++) {
    for (let j = 1; j < limit; j++) {
      let result = i * j;
      if (isPalindrom(result) && bigValue < result) {
        bigValue = result;
      }
    }
  }
  return bigValue;
}

console.log(highestPalindrom(999));