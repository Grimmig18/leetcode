/*
 * @lc app=leetcode id=219 lang=typescript
 *
 * [219] Contains Duplicate II
 */

// @lc code=start
function containsNearbyDuplicate(nums: number[], k: number): boolean {
    const window = new Set<number>();

    for (const [i, num] of nums.entries()) {

        if(window.has(num)) return true

        window.add(num)
        
        if(window.size > k) {
            window.delete(nums[i - k])
        }
    }

    return false
};
// @lc code=end

