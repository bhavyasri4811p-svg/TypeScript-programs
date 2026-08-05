class SumOfDigits {
    readonly number: number;
    static message: string = "Sum of Digits Program";
    constructor(num: number) {
        this.number = num;
    }
    calculateSum(): number {
        let sum = 0;
        let temp = this.number;
        while (temp > 0) {
            sum += temp % 10;
            temp = Math.floor(temp / 10);
        }
        return sum;
    }
}
let obj = new SumOfDigits(9876);
console.log(SumOfDigits.message);
console.log("Number:", obj.number);
console.log("Sum of Digits:", obj.calculateSum());
