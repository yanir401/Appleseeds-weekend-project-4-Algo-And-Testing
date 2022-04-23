const { test, expect } = require("@jest/globals");
const strStr = require("./strStr.easy");

test("Test 1", () => {
  expect(strStr("Hello", "ll")).toBe(2);
});
test("Test 2", () => {
  expect(strStr("Hello", "")).toBe(0);
});
test("Test 3", () => {
  expect(strStr("Hello", "bo")).toBe(-1);
});
test("Test 4", () => {
  expect(strStr("manufacturer", "er")).toBe(10);
});
