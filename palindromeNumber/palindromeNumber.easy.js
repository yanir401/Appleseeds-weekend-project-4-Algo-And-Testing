/**
 * @param {number} x
 * @return {boolean}
 * 
 * @description {Given an integer x, return true if x is palindrome integer.

An integer is a palindrome when it reads the same backward as forward.

For example, 121 is a palindrome while 123 is not.
 

Example 1:

Input: x = 121
Output: true
Explanation: 121 reads as 121 from left to right and from right to left.
Example 2:

Input: x = -121
Output: false
Explanation: From left to right, it reads -121. From right to left, it becomes 121-. Therefore it is not a palindrome.
Example 3:

Input: x = 10
Output: false
Explanation: Reads 01 from right to left. Therefore it is not a palindrome.} 
 */

const palindromeNumber = function (x) {
  //First method
  const newStr = x.toString().split("").reverse().join("");
  //   console.log(arr);
  return x == newStr ? true : false;

  //Second method
  //   const numToString = x.toString();
  //   let j = numToString.length - 1;
  //   for (let i = 0; i < numToString.length / 2; i++, j--) {
  //     if (numToString[i] !== numToString[j]) return false;
  //   }
  //   return true;
};
console.log(palindromeNumber(1001));

module.exports = palindromeNumber;
