export { sum, capitalize, reverseStr, calculator };

function sum(a, b) {
  return a + b;
}

function capitalize(str) {
  const str2 = str.charAt(0).toUpperCase() + str.slice(1);
  return str2;
}

function reverseStr(str) {
  return str.split("").reverse().join("");
}

function Calculator() {
  function add(x, y) {
    return x + y;
  }

  function sub(x, y) {
    return x - y;
  }

  function multiply(x, y) {
    return x * y;
  }

  function divide(x, y) {
    return x / y;
  }

  return { add, sub, multiply, divide };
}

const calculator = Calculator();
