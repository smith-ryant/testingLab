module.exports = {
  returnTwo: function () {
    return 2;
  },
  greeting: function (name) {
    return `Hello, ${name}.`;
  },
  add: function (num1, num2) {
    if (typeof num1 !== "number" || typeof num2 !== "number") {
      return NaN;
    }
    return num1 + num2;
  },
  multiply: function (a, b) {
    if (typeof a !== "number" || typeof b !== "number") {
      return NaN;
    }
    return a * b;
  },

  subtract: function (a, b) {
    if (typeof a !== "number" || typeof b !== "number") {
      return NaN;
    }
    return a - b;
  },

  divide: function (a, b) {
    if (typeof a !== "number" || typeof b !== "number") {
      return NaN;
    }
    if (b === 0) {
      throw new Error("Cannot divide by zero");
    }
    return a / b;
  },
};
