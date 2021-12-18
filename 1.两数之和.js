/*
 * @lc app=leetcode.cn id=1 lang=javascript
 *
 * [1] 两数之和
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function (nums, target) {
  map = new Map();
  for (let i = 0; i < nums.length; i++) {
    x = target - nums[i];
    if (map.has(x)) {
      return [map.get(x), i];
    }
    map.set(nums[i], i);
  }
};
// @lc code=end
/* 
解题过程：
1.用map来存放{数组元素值，坐标}这样的键值对
2.运用逆向解法，即用target减去数组中的某个元素，然后来判断map中是否有相同的值，若有则存在满足条件的答案，返回两个坐标即可；若没有，则保存{数组中某个元素值，对应的坐标}到map对象中。依次遍历即可判断是否有满足条件的两个元素。
*/
