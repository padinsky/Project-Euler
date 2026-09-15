function squarePerfectSumWithLimit(limit) {
  let result = 0n;
  for (let i = 1n; i < BigInt(limit); i += 2n) {
    result += i * i;
  }
  return result;
}

console.log(`Resultado: ${squarePerfectSumWithLimit(963000n)}`);