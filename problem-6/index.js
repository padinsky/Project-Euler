function squareSumWithLimit(limit) {
  let result = 0;
  for (let i = 1; i <= limit; i++) {
    result += i * i;
  }
  return result;
}

function squareOfSumWithLimit(limit) {
  let result = 0;
  for (let i = 1; i <= limit; i++) {
    result += i;
  }
  return result * result; 
}

function diffSquareSum(limit) {
  return squareOfSumWithLimit(limit) - squareSumWithLimit(limit);
}

console.log(diffSquareSum(100));