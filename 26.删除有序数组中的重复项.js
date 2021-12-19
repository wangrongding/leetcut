/*
 * @lc app=leetcode.cn id=26 lang=javascript
 *
 * [26] 删除有序数组中的重复项
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function (nums) {
  if (!nums.length) return 0;
  let i = 0,
    j = 1;
  for (; j < nums.length; j++) {
    if (nums[i] !== nums[j]) {
      nums[i + 1] = nums[j];
      i++;
    }
  }

  console.log(nums);
  //加上最初的第一个元素
  return i + 1;
};
removeDuplicates([0, 0, 0, 1, 1, 1, 2, 2, 3, 3, 4]); //[ 0, 1, 2, 3, 4, 1, 2, 3, 3, 4]
// @lc code=end

/* 
解体思路：
使用双指针实现原地删除
从第一个元素开始遍历比对，当nums[i]!=nums[j]的时候，让nums[i+1]=nums[j]后，对i++  

最后遍历结束后，i的值加上最初的一个元素（即i+1）就是结果值。
*/
