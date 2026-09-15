function sumEvenFibonacci(limit) {
  let evenSum = 0;
  let value1 = 1;
  let value2 = 1;
  while (true) {
    if (value2 >= limit) {
      return evenSum;
    }
    if (value2 % 2 === 0) {
      evenSum += value2;
    }
    const result = value1 + value2;
    value1 = value2;
    value2 = result;
  }
}

console.log(`La suma de los valores pares de la suseción de fibonacci hasta 4000000 es: ${sumEvenFibonacci(4000000)}`);