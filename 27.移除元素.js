/*
 * @lc app=leetcode.cn id=27 lang=javascript
 *
 * [27] 移除元素
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} val
 * @return {number}
 */
var removeElement = function (nums, val) {
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] === val) {
      nums.splice(i, 1);
      i--;
    }
  }
  return nums.length;
};
// @lc code=end
/*
解题思路：
原地移除，改变原数组，选择splice()
如果数组里碰到相同的val，就splice掉这一项，此时数组项数就少了一个，i要往后退回一个，即i--
*/
