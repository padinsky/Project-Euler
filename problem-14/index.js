function isEven(number) {
  return number / 2;
}

function isOdd(number) {
  return number * 3 + 1;
}

function selectSequence(number) {
  if (number % 2 === 0) {
    return isEven(number);
  } else {
    return isOdd(number);
  }
}

function collatzSequence(number) {
  let counter = 1;
  while (number !== 1) {
    counter++;
    number = selectSequence(number);
  }
  return counter;
}

function findLongestCollatzSequence(limit) {
  let longestSequence = 0;
  let longestSequenceNumber = 0;
  for (let i = 1; i < limit; i++) {
    const currentSequence = collatzSequence(i);
    if (currentSequence > longestSequence) {
      longestSequence = currentSequence;
      longestSequenceNumber = i;
    }
  }
  return { longestSequenceNumber, longestSequence};
}

console.log(findLongestCollatzSequence(1000000));