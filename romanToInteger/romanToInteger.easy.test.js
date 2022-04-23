const { test, expect } = require("@jest/globals");
const romanToInteger = require("./romanToInteger.easy");

test("Example 1", () => {
  expect(romanToInteger("MCMXCIV")).toBe(1994);
});

test("Example 1ss", () => {
  expect(romanToInteger("III")).toBe(3);
});

test("Example 1ss", () => {
  expect(romanToInteger("")).toBe(0);
});
