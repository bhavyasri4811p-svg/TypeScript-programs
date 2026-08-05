class SumOfDigits {
    private number: number;
    constructor(num: number) {
        this.number = num;
    }
    public calculateSum(): number {
        let sum = 0;
        let temp = this.number;
        while (temp > 0) {
            sum += temp % 10;
            temp = Math.floor(temp / 10);
        }
        return sum;
    }
}
let obj = new SumOfDigits(5678);
console.log("Sum of Digits:", obj.calculateSum());
