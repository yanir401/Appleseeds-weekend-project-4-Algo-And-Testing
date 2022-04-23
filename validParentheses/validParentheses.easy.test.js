const { test, expect } = require("@jest/globals");

const isValid = require("./validParentheses.easy");

test("Test 1 Valid pat", () => {
  expect(isValid("()[]{}")).toBe(true);
});

test("Test 2 Invalid", () => {
  expect(isValid("{}[)()")).toBe(false);
});
test("Test 3 Sending empty string", () => {
  expect(isValid("")).toBe(false);
});
test("Test 5 Invalid", () => {
  expect(isValid("([{([{}])}])")).toBe(false);
});
