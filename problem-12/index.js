function generateTriangleNumbers(size) {
    let currentValue = 0;
    let counter = 1;
    while(true) {
        currentValue += counter;
        if (size < divisorListOfThisNumber(currentValue)) {
            break;
        }
        counter++;
    }
    return currentValue;
}

function divisorListOfThisNumber(number) {
    let counter = 0;
    for (let i = 1; i <= number; i++) {
        if (number % i === 0) {
            counter++;
        }
    }
    return counter;
}

console.log(generateTriangleNumbers(500));