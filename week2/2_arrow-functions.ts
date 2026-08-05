const sumOfDigits = (num: number): number => {
    let sum = 0;
    while (num > 0) {
        sum += num % 10;
        num = Math.floor(num / 10);
    }
    return sum;
};
let number = 9876;
console.log("Sum of Digits:", sumOfDigits(number));
