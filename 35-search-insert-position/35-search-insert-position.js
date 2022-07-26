/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var searchInsert = function (nums, target) {
    let left = 0;
    let right = nums.length - 1;
    let temp = nums.length;
    while (left <= right) {
        const mid = Math.floor((left + right) / 2);
        if (nums[mid] === target) {
            return mid
        }
        if (nums[mid] < target) {
            left = mid + 1
        } else {
            temp = mid;
            right = mid - 1
        }
    }
    return temp
};