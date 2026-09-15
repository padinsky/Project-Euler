function getPrimeListInRange(limit) {
  const primes = [];
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
      primes.push(counter);
      if (primes.length === limit) {
        return counter;
      }
    }
    counter++;
  }
}

console.log(getPrimeListInRange(1000000)) 