/*
 * @lc app=leetcode id=263 lang=typescript
 *
 * [263] Ugly Number
 */

// @lc code=start
const uglyFactors = [2, 3, 5]

function isUgly(n: number): boolean {
    if (n < 1) {
        return false;
    }
    
    // Factor out the 2's first.
    while (n % 2 === 0) {
        n = n / 2;
    }

    // Now n is odd. We only need to check for odd divisors up to sqrt(n).
    for (let i = 3; i <= Math.sqrt(n); i += 2) {
        while (n % i === 0) {
            if (!uglyFactors.includes(i)) {
                console.log(`Not ugly: ${n} includes ${i}`)
                return false
            }
            n = n / i;
        }
    }

    // If n is a prime number greater than 2, then n itself is a factor.
    if (n > 2) {
        if(!uglyFactors.includes(n)) {
            console.log(`Not ugly: ${n} includes ${n}`)
            return false
        }
    }

    return true
}

// @lc code=end

