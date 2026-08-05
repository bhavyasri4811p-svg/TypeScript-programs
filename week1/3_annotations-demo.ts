// Variable Annotation
let number: number = 12345;
// Function Annotation
function sumOfDigits(num: number): number {
    let sum: number = 0;
    while (num > 0) {
        sum += num % 10;
        num = Math.floor(num / 10);
    }
    return sum;
}
let result: number = sumOfDigits(number);
console.log("Number:", number);
console.log("Sum of Digits:", result);
