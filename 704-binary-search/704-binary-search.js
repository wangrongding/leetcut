/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */


// ES6
/* var search = function(nums, target) {
    return nums.findIndex((item)=>{
        return item === target
    })
}; */

// 二分查找法
var search = function (nums, target) {
    let left = 0;
    let right = nums.length - 1;
    while (left <= right) {
        let mid = (left + right) >> 1;

        if (nums[mid] === target) {
            return mid;
        }
        if (nums[mid] < target) {
            left = mid + 1;
        }
        if (nums[mid] > target) {
            right = mid - 1;
        }
    }
    return -1;
};