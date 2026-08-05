// any
let value: any = 10;
console.log(value);
value = "Hello";
console.log(value);
// unknown
let input: unknown = "TypeScript";
if (typeof input === "string") {
    console.log(input.toUpperCase());
}
// void
function greet(): void {
    console.log("Welcome!");
}
greet();
// never
function showError(message: string): never {
    throw new Error(message);
}
