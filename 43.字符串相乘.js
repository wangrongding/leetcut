/*
 * @lc app=leetcode.cn id=43 lang=javascript
 *
 * [43] 字符串相乘
 */

// @lc code=start
/**
 * @param {string} num1
 * @param {string} num2
 * @return {string}
 */
var multiply = function (num1, num2) {
  if (num1 === "0" || num2 === "0") {
    return "0";
  }
  var l1 = num1.length,
    l2 = num2.length,
    p = new Array(l1 + l2).fill(0);
  for (var i = l1; i--; ) {
    for (var j = l2; j--; ) {
      var tmp = num1[i] * num2[j] + p[i + j + 1];
      p[i + j + 1] = tmp % 10;
      p[i + j] += 0 | (tmp / 10);
    }
  }
  while (p[0] === 0) {
    p.shift();
  }
  return p.join("");
};
// @lc code=end
