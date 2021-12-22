/*
 * @lc app=leetcode.cn id=118 lang=javascript
 *
 * [118] 杨辉三角
 */

// @lc code=start
/**
 * @param {number} numRows
 * @return {number[][]}
 */
var generate = function (numRows) {
  const res = [];
  for (let i = 0; i < numRows; i++) {
    //生成i+1层数组,并且全部填充1
    const tempRow = new Array(i + 1).fill(1);
    for (let j = 1; j < tempRow.length - 1; j++) {
      // tempRow[j]=它上一个数组的j-1位和j位的和
      tempRow[j] = res[i - 1][j - 1] + res[i - 1][j];
    }
    res.push(tempRow);
  }
  return res;
};
generate(5);
// @lc code=end

/* 
解题思路:
  杨辉三角的每一层,除了当前层的首位,和末位不需要处理都是1之外,
  其余所有元素都遵循:  
  Array[层级][当前位] = Array[层级-1] + [当前位-1] + Array[层级-1] + [当前位-1]
*/
