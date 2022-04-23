/**
 * @param {string} s
 * @return {boolean}
 * 
 * @description Given a string s containing just the characters '(', ')', '{', '}', '[' and ']', determine if the input string is valid.

An input string is valid if:

Open brackets must be closed by the same type of brackets.
Open brackets must be closed in the correct order.
 

Example 1:

Input: s = "()"
Output: true
Example 2:

Input: s = "()[]{}"
Output: true
Example 3:

Input: s = "(]"
Output: false
 */
const isValid = function (s) {
  if (s.length < 1) {
    return false;
  }
  let prevParentheses = "";
  for (let i = 0; i < s.length; i++) {
    if (s[i] === "(" || s[i] === "[" || s[i] === "{") {
      prevParentheses = s[i];
    } else if (s[i] === ")" && prevParentheses === "(") continue;
    else if (s[i] === "]" && prevParentheses === "[") continue;
    else if (s[i] === "}" && prevParentheses === "{") continue;
    else return false;
  }
  return true;
};

console.log(isValid("()[]{}()"));
console.log(isValid("({[]{(){}}})"));
console.log(isValid("([{([{)]})])"));
console.log(isValid("([{([{}])}])"));

module.exports = isValid;
