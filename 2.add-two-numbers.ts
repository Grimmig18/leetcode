/*
 * @lc app=leetcode id=2 lang=typescript
 *
 * [2] Add Two Numbers
 */

// @lc code=start
/**
 * Definition for singly-linked list.

 */


class ListNode {
    val: number
    next: ListNode | null
    constructor(val?: number, next?: ListNode | null) {
        this.val = (val===undefined ? 0 : val)
        this.next = (next===undefined ? null : next)
    }
}

function addTwoNumbers(l1: ListNode | null, l2: ListNode | null): ListNode | null {
    const n1 = toInt(l1)
    const n2 = toInt(l2)
    
    const l = toListNode(n1 + n2)
    toInt(toListNode(n1 + n2))
    return l
};

function toInt(l: ListNode | null): bigint {
    if(!l) return BigInt(0)

    const digits = [l.val]
    while(l.next) {
        l = l.next
        digits.push(l.val)
    }
    console.log(digits)
    return BigInt(digits.reverse().join(''))
}

function toListNode(n: bigint): ListNode {
    const digits = ('' + n).split('').reverse()
    
    const firstNode = new ListNode(+digits[0], null)
    let current = firstNode
    for(const [i, digit] of digits.entries()) {
        if(i === 0) continue

        current.next = new ListNode(+digit, null)
        current = current.next
    }

    return firstNode
}
// @lc code=end

