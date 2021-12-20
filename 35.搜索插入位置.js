/*
 * @lc app=leetcode.cn id=35 lang=javascript
 *
 * [35] 搜索插入位置
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var searchInsert = function (nums, target) {
  let i = 0,
    j = nums.length - 1;
  while (i <= j) {
    let mid = Math.floor(i + (j - i) / 2); //拿到数组的中位,并将其控制在操作的区间范围内
    if (nums[mid] > target) {
      //中位比目标值大,区间向左收小
      j = mid - 1;
    } else if (nums[mid] < target) {
      //中位比目标值小,区间向右收小
      i = mid + 1;
    } else {
      //中位=目标值,直接返回中位
      return mid;
    }
  }
  //没找到,返回左区间的起始位置
  return i;
};
searchInsert([1, 3, 5, 6], 2);
// @lc code=end

/* 
解题思路:
  最简单的方法就是for循环遍历比对了
  但是时间复杂度为O(logn),所以我们只能选择二分查找法
*/
