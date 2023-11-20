import { sum, capitalize, reverseStr } from "./index.js";

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
