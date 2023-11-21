import {
  sum,
  capitalize,
  reverseStr,
  calculator,
  caesarCipher,
  nextChar,
} from "./index.js";

test("adds 1 + 2 to equal 3", () => {
  expect(sum(1, 2)).toBe(3);
});

test("capitalizes first letter of word", () => {
  expect(capitalize("test")).toMatch(/Test/);
  // expect("test".toMatch(/Test/));
});

test("capitalizes first letter of multiple words in string", () => {
  expect(capitalize("test longer strings")).toMatch(/Test longer strings/);
  // expect("test".toMatch(/Test/));
});

test("reverse string", () => {
  expect(reverseStr("rydge")).toMatch(/egdyr/);
});

test("reverse string with multiple words", () => {
  expect(reverseStr("rydge test")).toMatch(/tset egdyr/);
});

test("reverse string with capital letters", () => {
  expect(reverseStr("Rydge test")).toMatch(/tset egdyR/);
});

test("add two numbers", () => {
  expect(calculator.add(1, 1)).toBe(2);
});

test("subtract two numbers", () => {
  expect(calculator.sub(1, 1)).toBe(0);
});

test("multiply two numbers", () => {
  expect(calculator.multiply(2, 2)).toBe(4);
});

test("divide two numbers", () => {
  expect(calculator.divide(4, 2)).toBe(2);
});

test("shift three letters", () => {
  expect(nextChar("b")).toMatch(/e/);
});

test("shift word three letters", () => {
  expect(caesarCipher("shift")).toMatch(/vkliw/);
});

test("shift three letters of multiple words", () => {
  expect(caesarCipher("Shift by three")).toMatch(/Vkliw eb wkuhh/);
});

test("shift z by three", () => {
  expect(caesarCipher("z")).toMatch(/c/);
});

test("shift by three with decimal", () => {
  expect(caesarCipher("Shift by three.")).toMatch(/Vkliw eb wkuhh./);
});
