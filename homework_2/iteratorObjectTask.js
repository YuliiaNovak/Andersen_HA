let iterator = {
  from: 1,
  to: 10,
};

const checkForErrors = (to, from) => {
  if (typeof to !== "number" || typeof from !== "number") {
    throw new Error("The object values must be numbers!");
  }
  if (to < from) {
    throw new Error(
      'The value of "to" must be greater than the value of "from"!'
    );
  }
};

iterator[Symbol.iterator] = function () {
  let from = this.from;
  let to = this.to;

  checkForErrors(to, from);

  return {
    next() {
      if (from <= to) {
        return {
          done: false,
          value: from++,
        };
      } else {
        return {
          done: true,
        };
      }
    },
  };
};

for (let num of iterator) {
  console.log(num);
}
