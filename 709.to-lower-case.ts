/*
 * @lc app=leetcode id=709 lang=typescript
 *
 * [709] To Lower Case
 */

// @lc code=start
function toLowerCase(s: string): string {
    let output = ''
    for(const char of s.split('')) {
        output += char.match(/[A-Z]/g) ? String.fromCharCode(char.charCodeAt(0) + 32) : char
    }

    return output
};
// @lc code=end

