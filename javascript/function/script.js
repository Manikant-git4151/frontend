const calc = (a, b, op) => {
    if (op === "+") {
        return a + b;
    } else if (op === "-") {
        return a - b;
    } else if (op === "*") {
        return a * b;
    } else if (op === "/") {
        if (b === 0) {
            return "can't divide by 0";
        }
        return a / b;
    } else {
        return "unknown op";
    }
};

console.log(calc(5, 3, "+"));
console.log(calc(10, 2, "/"));
