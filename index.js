export { sum, capitalize, reverseStr };

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
