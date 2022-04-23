const { test, expect } = require("@jest/globals");
const searchInsert = require("./searchInsertPosition.easy");

test("Example 1", () => {
  expect(searchInsert([1, 5, 7, 8, 12], 2)).toBe(1);
});

test("Example 2", () => {
  expect(searchInsert([-100, -90, -50, -30], -40)).toBe(3);
});

test("Example 3", () => {
  expect(searchInsert([-5, -1, 0, 1, 50], 70)).toBe(5);
});

test("Example 4", () => {
  expect(searchInsert([3, 4, 8, 11, 20], -105)).toBe("Invalid Input");
});
