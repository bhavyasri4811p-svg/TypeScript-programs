// Function without parameters
function greet(): void {
    console.log("Welcome to TypeScript!");
}
// Function with parameters
function add(a: number, b: number): number {
    return a + b;
}
// Function with default parameter
function display(name: string = "Student"): void {
    console.log("Hello " + name);
}
// Function call
greet();
console.log("Sum =", add(10, 20));
display();
display("Bhavya");
