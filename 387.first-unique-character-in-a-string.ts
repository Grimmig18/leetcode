/*
 * @lc app=leetcode id=387 lang=typescript
 *
 * [387] First Unique Character in a String
 */

// @lc code=start
function firstUniqChar(s: string): number {
    const charCount: any = {};
    for (const char of s) {
        charCount[char] = (charCount[char] || 0) + 1
    }

    for (let i = 0; i < s.length; i++) {
        if (charCount[s[i]] === 1) {
            return i;
        }
    }
    
    return -1
}

// @lc code=end

