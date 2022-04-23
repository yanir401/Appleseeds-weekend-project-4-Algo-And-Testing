const { test, expect } = require("@jest/globals");
const twoSum = require("./twoSum.easy");

test("Example 1", () => {
  expect(twoSum([1, 5, 7, 8, 12], 2)).toBe("Not found");
});

test("Example 2", () => {
  expect(twoSum([-100, -90, -50, -30], -80)).toStrictEqual([-50, -30]);
});

test("Example 3", () => {
  expect(twoSum([-5, -1, 0, 1, 50], 51)).toStrictEqual([1, 50]);
});

test("Example 4", () => {
  expect(twoSum([3, 4, 8, 11, 20], 28)).toStrictEqual([8, 20]);
});
