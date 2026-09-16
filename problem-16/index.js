function powerDigitSum(power) {
    const number = BigInt(2) ** BigInt(power);
    const digits = number.toString();
    let sum = 0;
    for (const digit of digits) {
        sum += parseInt(digit, 10);
    }
    return sum;
}

console.log(powerDigitSum(1000));