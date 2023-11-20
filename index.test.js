import { sum, capitalize } from "./index.js";

test("adds 1 + 2 to equal 3", () => {
  expect(sum(1, 2)).toBe(3);
});

test("capitalizes first letter of string", () => {
  expect(capitalize("test")).toMatch(/Test/);
  // expect("test".toMatch(/Test/));
});
