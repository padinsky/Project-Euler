function getSumPrimesListInRange(limit) {
  const primes = [];
  let sumPrimes = 0;
  let counter = 2;
  while(true) {
    let isPrime = true;
    for (let prime of primes) {
      if (counter % prime === 0 && prime !== 1 && prime !== counter) {
        isPrime = false;
        break;
      }
    }
    if (isPrime) {
      if (counter >= limit) {
        return sumPrimes;
      }
      primes.push(counter);
      sumPrimes += counter;
    }
    counter++;
  }
}

console.log(getSumPrimesListInRange(2000000));