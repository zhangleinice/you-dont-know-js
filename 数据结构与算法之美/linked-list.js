/**
 * 判断一个整数是否是回文数
 * @param {number} x
 * @return {boolean}
 */
const isPalindrome = function (x) {
  if (x < 0) return false;
  const s = String(x);
  const y = s.split("").reverse().join("");
  return s === y;
};

const x = isPalindrome(121);
console.log("x", x);
