import { NumberData } from "./4_Number";
import { SumLogic } from "./4_SumLogic";
import { MESSAGE } from "./4_Constants";
let obj = new NumberData(12345);
let logic = new SumLogic();
console.log(MESSAGE);
console.log("Number:", obj.number);
console.log("Sum of Digits:", logic.calculate(obj));
