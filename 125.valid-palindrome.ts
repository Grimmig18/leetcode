/*
 * @lc app=leetcode id=125 lang=typescript
 *
 * [125] Valid Palindrome
 */

// @lc code=start
function isPalindrome(s: string): boolean {
    const chars = s.replaceAll(/[^a-zA-Z0-9]/g, '').toLowerCase().split('')

    for(let i = 0; i < Math.floor(chars.length / 2); i++) {
        if(chars[i] !== chars[chars.length - i - 1]) return false
    }

    return true
};
// @lc code=end

