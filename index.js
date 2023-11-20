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

  return { add };
}

const calculator = Calculator();
