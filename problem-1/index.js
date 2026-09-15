function getMultiplos(values, range) {
  const multiplos = new Set();
  for (const value of values) {
    for (let i = 2; i < range; i++) {
      if (i % value === 0) {
        multiplos.add(i);
      }
    }
  }
  return multiplos
}

function sumaSet(multiplos) {
  let result = 0;
  for (const value of multiplos) {
    result += value;
  }
  return result;
}

console.log(`La suma de todos los múltiplos de 3 y 5 hasta 1000 es: ${sumaSet(getMultiplos([3, 5], 1000))}`);