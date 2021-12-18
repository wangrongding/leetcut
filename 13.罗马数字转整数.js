/*
 * @lc app=leetcode.cn id=13 lang=javascript
 *
 * [13] 罗马数字转整数
 */

// @lc code=start
/**
 * @param {string} s
 * @return {number}
 */
var romanToInt = function (s) {
  const map = {
    I: 1,
    V: 5,
    X: 10,
    L: 50,
    C: 100,
    D: 500,
    M: 1000,
  };
  let sum = 0;
  for (i = 0; i < s.length; i++) {
    const item = s[i];
    let val = map[item];
    if (val < map[s[i + 1]]) {
      // 前面小于后面 后面 - 前面
      val = map[s[i + 1]] - val;
      i++;
    }
    sum += val;
  }
  return sum;
};
// @lc code=end
/* 
1.创建一个map作为映射数据
2.遍历传递的罗马数字，每次判断一下当前值 与 后一个值做比较
3.如果当前值小于后面值，则当前值 = 后面值 - 当前值，并i++ 下一次就不需要循环
4.每次遍历加在sum值里。
 */
