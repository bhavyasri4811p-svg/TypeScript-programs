// Arrow function to add two numbers
const add = (a: number, b: number): number => {
    return a + b;
};
// Arrow function to find square
const square = (num: number): number => num * num;
// Arrow function without parameters
const welcome = (): void => {
    console.log("Welcome to Arrow Functions");
};
console.log("Addition =", add(15, 5));
console.log("Square =", square(6));
welcome();
