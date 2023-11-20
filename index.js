export { sum, capitalize };

function sum(a, b) {
  return a + b;
}

function capitalize(str) {
  const str2 = str.charAt(0).toUpperCase() + str.slice(1);
  return str2;
}
