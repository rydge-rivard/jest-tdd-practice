export {
  sum,
  capitalize,
  reverseStr,
  calculator,
  caesarCipher,
  nextChar,
  analyzeArray,
  checkNumbers,
};

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

function caesarCipher(str) {
  let encryptedStr = "";
  for (let i = 0; i < str.length; i++) {
    const c = str.charAt(i);
    encryptedStr += nextChar(c);
  }
  return encryptedStr;
}

function nextChar(c) {
  if (
    (c.charCodeAt(0) >= 65 && c.charCodeAt(0) <= 87) ||
    (c.charCodeAt(0) >= 97 && c.charCodeAt(0) <= 119)
  ) {
    return String.fromCharCode(c.charCodeAt(0) + 3);
  } else if (
    (c.charCodeAt(0) >= 88 && c.charCodeAt(0) <= 90) ||
    (c.charCodeAt(0) >= 120 && c.charCodeAt(0) <= 122)
  ) {
    return charExceptions(c);
  } else {
    return c;
  }
}

function charExceptions(c) {
  if (c === "x") {
    return "a";
  } else if (c === "y") {
    return "b";
  } else if (c === "z") {
    return "c";
  } else return c;
}

function analyzeArray(arr) {
  if (checkNumbers(arr) === false) {
    return "Array must only contain numbers";
  }
  return BasicData(avgArr(arr), Math.min(...arr), Math.max(...arr), arr.length);
}

function BasicData(average, min, max, length) {
  return { average, min, max, length };
}

const data = [1, 8, 3, 4, 2, 6];

function avgArr(arr) {
  let sum = 0;
  arr.forEach((element) => {
    sum = sum + element;
  });
  return sum / arr.length;
}

function checkNumbers(arr) {
  return arr.every((element) => {
    if (typeof element !== "number") {
      return false;
    }
    return true;
  });
}
