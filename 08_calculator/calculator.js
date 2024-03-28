const add = function (a, b) {
  return a + b;
};

const subtract = function (a, b) {
  return a - b;
};

const sum = function (arr) {
  return arr.reduce((prev, curr,) => prev + curr, 0);
};

const multiply = function (arr) {
  return arr.reduce((prev, curr) => prev * curr);
};

const power = function (a, b) {
  return a ** b;
};

const factorial = function (f) {
  const memory = [];
  memory[0] = 1;

  for (let i = 1; i <= f; i++) {
    memory[i] = i * memory[i - 1];
  }

  return memory[f];
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
