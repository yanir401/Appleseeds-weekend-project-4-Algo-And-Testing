/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 * 
 * @description {Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.

You may assume that each input would have exactly one solution, and you may not use the same element twice.

You can return the answer in any order.

 

Example 1:

Input: nums = [2,7,11,15], target = 9
Output: [0,1]
Explanation: Because nums[0] + nums[1] == 9, we return [0, 1].
Example 2:

Input: nums = [3,2,4], target = 6
Output: [1,2]
Example 3:

Input: nums = [3,3], target = 6
Output: [0,1]}
 */

const twoSum = function (nums, target) {
  const returnArray = [];
  for (let i = 0; i < nums.length; i++) {
    for (let j = 1; j < nums.length; j++) {
      const currentSum = nums[i] + nums[j];
      if (currentSum === target) {
        returnArray.push(nums[i], nums[j]);
        return returnArray;
      }
    }
  }
  return "Not found";
};

twoSum([3, 2, 4, 5, 1, 7, 9], 71);
console.log(twoSum([-100, -90, -50, -30], -80));

module.exports = twoSum;
