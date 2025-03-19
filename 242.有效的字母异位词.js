/*
 * @lc app=leetcode.cn id=242 lang=javascript
 *
 * [242] 有效的字母异位词
 */

// @lc code=start
/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function(s, t) {
    if(s.length !== t.length) return false;
    if(s === t) return true;
    if(s.split('').sort().join('') === t.split('').sort().join('')) return true;
    return false;
};
// @lc code=end

