function numbersDividedInRange(range) {
  let number = 1;
  while (true) {
    let isOK = true;
    for(let i = 1; i < range; i++) {
      if (number % i !== 0) {
        isOK = false;
        break;
      }
    }
    if (isOK) {
      return number;
    }
    number++;
  }
}

console.log(numbersDividedInRange(30));