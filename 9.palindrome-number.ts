/*
 * @lc app=leetcode id=9 lang=typescript
 *
 * [9] Palindrome Number
 */

// @lc code=start
function isPalindrome(x: number): boolean {
    const digits = ('' + x).split('')

    for(let i = 0; i < Math.floor(digits.length / 2); i++) {
        if(digits[i] !== digits[digits.length - i - 1]) return false
    }

    return true
};
// @lc code=end

