/*
 * @lc app=leetcode.cn id=2 lang=javascript
 *
 * [2] 两数相加
 */

// @lc code=start
/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var addTwoNumbers = function (l1, l2) {
  let dummy = new ListNode();
  let curr = dummy;
  let carry = 0;
  while (l1 !== null || l2 !== null) {
    let sum = 0;
    if (l1 !== null) {
      sum += l1.val;
      l1 = l1.next;
    }
    if (l2 !== null) {
      sum += l2.val;
      l2 = l2.next;
    }
    sum += carry;
    curr.next = new ListNode(sum % 10);
    carry = Math.floor(sum / 10);
    curr = curr.next;
  }
  if (carry > 0) {
    curr.next = new ListNode(carry);
  }
  return dummy.next;
};
// @lc code=end

/* 
解题思路
首先当我们看到这个题目的时候，发现这个里面最主要的是进位问题。
1.首先先创建一个 dummy节点，以及一个curr节点，curr用于对相加之后链表的生成，而dummy 节点是为了最后对链表的遍历。
2.在处理进位问题，我设置了一个简单的变量carry 用来表示以及监听，一开始将carry设置为0，当两个值相加大于10的时候，carry就会等于Math.floor(sum/10)，当然因为题目里面说明了每个节点只能存储一位数字，所以carry只会在0和1两个当中切换，记得在每一次使用后都归0。
3.最后，就是要判断一下 carry是否不为0，当carry不为0的时候，要在最前面新建一个节点用来存储
4.然后就是简单的遍历
*/
