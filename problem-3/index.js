function functionGetPrimeFactor(number) {
  let lastNumber = 1;
  while(true) {
    for (let i = 2; i <= number; i++) {
      if (number % i === 0) {
        number = number / i;
        lastNumber = i; 
        break;
      }
    }
    if (number === 1) {
      return lastNumber;
    } 
  }
  
}

console.log(`${functionGetPrimeFactor(600851475143)}`);