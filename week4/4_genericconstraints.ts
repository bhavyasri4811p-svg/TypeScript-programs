interface NumberInfo {
    number: number;
}
function sumOfDigits<T extends NumberInfo>(obj: T): number {
    let sum = 0;
    let temp = obj.number;
    while (temp > 0) {
        sum += temp % 10;
        temp = Math.floor(temp / 10);
    }
    return sum;
}
console.log(sumOfDigits({ number: 9876 }));
