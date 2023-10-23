let data = ["mountain", "lamp", "mouse", "headphones", "ship", "window"];

Array.prototype.myFilter = function (fn) {
  const result = [];

  for (let i = 0; i < this.length; i++) {
    if (fn(this[i], i, this)) {
      result.push(this[i]);
    }
  }

  return result;
};

const filteredArray = data.myFilter((el, index, arr) => {
  el = arr[index] += "!";
  return el.length < 6;
});

console.log("filtered", filteredArray);
