/*
 * @lc app=leetcode.cn id=93 lang=javascript
 *
 * [93] 复原 IP 地址
 */

// @lc code=start
/**
 * @param {string} s
 * @return {string[]}
 */
function restoreIpAddresses(s) {
  const result = [];

  function permute(arr, str) {
    if (arr.length === 3) {
      if (isValid(str)) result.push([...arr, str]);
      return;
    }

    for (let i = 1; i < 4; i++) {
      let subStr = str.slice(0, i);
      if (!isValid(subStr)) continue;
      permute([...arr, subStr], str.slice(i));
    }
  }

  function isValid(str) {
    if (+str > 255 || !str.length) return false;
    if (str.length >= 2 && str[0] === "0") return false;
    return true;
  }

  permute([], s);
  return result.map((x) => x.join("."));
}
// @lc code=end
