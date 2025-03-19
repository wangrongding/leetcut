/*
 * @lc app=leetcode.cn id=9 lang=javascript
 *
 * [9] 回文数
 */

// @lc code=start
/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function (x) {
  // 负数直接返回 false
  if (x < 0) return false
  // 转换为字符串
  const str = x.toString()
  // 双指针
  let left = 0,
    right = str.length - 1
  while (left < right) {
    if (str[left] !== str[right]) return false
    left++
    right--
  }
  return true
}
// @lc code=end
