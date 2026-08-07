// Special Data Types
let value: any = 5678;
console.log("Any:", value);
let input: unknown = 1234;
if (typeof input === "number") {
    console.log("Unknown:", input);
}
function display(): void {
    console.log("Calculating Sum of Digits");
}
display();
