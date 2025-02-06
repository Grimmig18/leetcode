/*
 * @lc app=leetcode id=1 lang=typescript
 *
 * [1] Two Sum
 */

// @lc code=start
function twoSum(nums: number[], target: number): number[] {
    const base = -1
    
    for(const [i, ni] of nums.entries()) {
        for(const [j, nj] of nums.entries()) {
            if(i === j) continue
            if(ni + nj === target) return [i, j]
        }
    }

    return []

};
// @lc code=end

