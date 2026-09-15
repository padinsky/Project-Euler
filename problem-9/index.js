function getSpecialTripletPythagoreanWithPerimeter(perimeter) {
  for (let c = 3; c < perimeter; c++) {
    for (let b = 2; b < c; b++) {
      for (let a = 1; a < b; a++) {
        if (a + b + c === perimeter && 
          Math.pow(a,2) + Math.pow(b,2) === Math.pow(c,2)) {
            console.log(a, b, c);
            return a * b * c;
        }
      }
    }
  }
}

console.log(getSpecialTripletPythagoreanWithPerimeter(1000));