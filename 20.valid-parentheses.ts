/*
 * @lc app=leetcode id=20 lang=typescript
 *
 * [20] Valid Parentheses
 */

// @lc code=start
function isValid(s: string): boolean {
    const chars = s.split('')
    const openBracket = {
        ')': '(',
        ']': '[',
        '}': '{'
    }
    const opened: string[] = []

    for (const char of chars) {
        if (['(', '{', '['].includes(char)) {
            opened.push(char)
        }

        if ([')', '}', ']'].includes(char)) {
            if (opened[opened.length - 1] !== openBracket[char]) {
                return false
            }

            opened.pop()
        }
    }

    return opened.length === 0
};
// @lc code=end

