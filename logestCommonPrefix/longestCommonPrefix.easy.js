/**
 * @param {string[]} strs
 * @return {string}
 *
 * @description {Write a function to find the longest common prefix string amongst an array of strings.
                If there is no common prefix, return an empty string "".}
 * 
 * Example 1 
 * Input: strs = ["flower","flow","flight"]
 * Output: "fl"
 * 
 *
 * Example 2
 * Input: strs = ["dog","racecar","car"]
 * Output: ""
 *
 */

const longestCommonPrefix = function (strs) {
  let prefix = "";
  for (let i = 1; i < strs.length; i++) {
    let strPrefix = "";
    let j = 0;
    while (j < strs[i].length) {
      const prevChar = strs[0].charAt(j);
      const currChar = strs[i].charAt(j);
      if (prevChar === currChar) strPrefix += prevChar;
      else break;
      j++;
    }
    if (prefix.length === 0) prefix = strPrefix;
    if (prefix.length > strPrefix.length) prefix = strPrefix;
  }
  return prefix;
};

const strs = [
  "flws",
  "flowa",
  "flows",
  "flowsb",
  "flowsu",
  "flowsen",
  "flws",
  "f",
];
// const strs = ["dog", "racecar", "car"];
const result = longestCommonPrefix(strs);
console.log(result);

module.exports = longestCommonPrefix;
