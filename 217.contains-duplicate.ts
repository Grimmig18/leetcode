/*
 * @lc app=leetcode id=217 lang=typescript
 *
 * [217] Contains Duplicate
 */

// @lc code=start
function containsDuplicate(nums: number[]): boolean {
    const unique = new Set()
    
    for(const num of nums) {
        if(unique.has(num)) return true
        unique.add(num)
    }

    return false
};
// @lc code=end

