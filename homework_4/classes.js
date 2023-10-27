class Calculator {
  constructor(x, y) {
    if (this.isValidNumber(x) && this.isValidNumber(y)) {
      this.x = x;
      this.y = y;
    } else {
      throw new Error("Invalid numbers provided.");
    }
  }

  isValidNumber(num) {
    return typeof num === "number" && isFinite(num);
  }

  setX(x) {
    if (this.isValidNumber(x)) {
      this.x = x;
    } else {
      throw new Error("Invalid number provided.");
    }
  }

  setY(y) {
    if (this.isValidNumber(y)) {
      this.y = y;
    } else {
      throw new Error("Invalid number provided.");
    }
  }

  logSum() {
    return this.x + this.y;
  }

  logMul() {
    return this.x * this.y;
  }

  logSub() {
    return this.x - this.y;
  }

  logDiv() {
    if (this.y === 0) {
      throw new Error("Division by zero is not allowed.");
    }
    return this.x / this.y;
  }
}

const calculator = new Calculator(0, 4);

// Testing the methods
console.log("logSum", calculator.logSum());
console.log("logMul", calculator.logMul());
console.log("logSub", calculator.logSub());
console.log("logDiv", calculator.logDiv());

// Assigning a method to another variable
const logSumRef = calculator.logSum.bind(calculator);
console.log("logSumRef", logSumRef());
