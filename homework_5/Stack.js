class Stack {
  constructor(stackSize = 10) {
    if (!this.#isValidNumber(stackSize)) {
      throw new Error("Invalid numbers provided.");
    }
    this.stackSize = stackSize;
    this.data = [];
  }

  push(num) {
    if (this.data.length === this.stackSize) {
      throw new Error("Stack size exceeded.");
    }
    return this.data.push(num);
  }

  pop() {
    if (this.isEmpty) {
      throw new Error("Stack is empty.");
    }
    return this.data.pop();
  }

  peek() {
    if (!this.isEmpty) return null;
    return this.data.slice(-1).pop();
  }

  isEmpty() {
    console.log("isEmpty", this.data.length, !this.data.length);
    return !this.data.length;
  }

  toArray() {
    return [...this.data];
  }

  static fromIterable(entity) {
    if (typeof entity[Symbol.iterator] !== "function") {
      throw new Error("The entity is not iterable.");
    }

    const stack = new Stack(entity.length);
    entity.map((item) => stack.push(item));
    return stack;
  }

  #isValidNumber(num) {
    return typeof num === "number" && isFinite(num);
  }
}
