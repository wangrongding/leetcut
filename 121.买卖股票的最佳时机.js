/*
 * @lc app=leetcode.cn id=121 lang=javascript
 *
 * [121] 买卖股票的最佳时机
 */

// @lc code=start
/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function (prices) {
  //最大收益
  let maxRes = 0;
  //最小买入价格(我们先设置一个最大值:题设 0 <= prices[i] <= 10^4)
  let min = 10 ** 4;
  for (let i = 0; i < prices.length; i++) {
    //当前价格<最小买入价格
    if (prices[i] < min) {
      min = prices[i];
      //当前价格 - 最小买入价格 大于前面的maxRes的时候
    } else if (prices[i] - min > maxRes) {
      maxRes = prices[i] - min;
    }
    console.log(min, maxRes);
  }
  console.log(maxRes);
  return maxRes;
};
maxProfit([7, 1, 5, 3, 6, 4]);
// @lc code=end
/* 
解题思路:
  这里可以有很多种解法,最暴力的无非是双for循环,这里我们通过一次遍历即可;
  具体先声明最大收益为0,最小历史最低买入价格设置为10**4(题中提到Prices[i]<=10^4)
  只要找到Prices[i]<min的,就将rices[i]替换为min的值,且每次会判断 当前价格 - 最小的买入价格是否大于当前暂存的最大收益数,true的情况下对最大收益重新赋值;
  一次遍历结束后返回的就是最大的收益
  这里我们通过一次遍历,时间复杂度O: (n),因为只使用了常数个变量,所以空间复杂度：O(1);
*/
