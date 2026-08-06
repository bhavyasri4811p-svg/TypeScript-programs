class Display<T> {
    value: T;
    constructor(value: T) {
        this.value = value;
    }
    show(): void {
        console.log(this.value);
    }
}
let num = new Display<number>(12345);
num.show();
