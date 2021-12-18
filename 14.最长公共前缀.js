/*
 * @lc app=leetcode.cn id=14 lang=javascript
 *
 * [14] 最长公共前缀
 */

// @lc code=start
/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function (strs) {
  if (!strs.length) return "";
  let tempStr = strs[0];
  for (let i = 1; i < strs.length; i++) {
    let j = 0;
    for (; j < tempStr.length && j < strs[i].length; j++) {
      if (tempStr[j] != strs[i][j]) break;
    }
    tempStr = tempStr.substring(0, j);
    console.log(tempStr, "tempStr");
    if (!tempStr) return "";
  }
  return tempStr;
};
longestCommonPrefix(["flower", "flow", "flight"]);
// @lc code=end

/* 
解题思路：
当strs.length==0时直接return ''
取第一个元素与其他元素中的字符逐个比较，当遇到比对结果不同时，跳出循环，对临时字符串进行赋值
*/
