import { NumberData } from "./4_Number";
export class SumLogic {
    calculate(data: NumberData): number {
        let sum = 0;
        let temp = data.number;
        while (temp > 0) {
            sum += temp % 10;
            temp = Math.floor(temp / 10);
        }
        return sum;
    }
}
