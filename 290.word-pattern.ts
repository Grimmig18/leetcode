/*
 * @lc app=leetcode id=290 lang=typescript
 *
 * [290] Word Pattern
 */

// @lc code=start
function wordPattern(pattern: string, s: string): boolean {
    const words = s.split(' ')
    const charMap = new Map<string, string>()
    const usedWords = new Set<string>()

    if(words.length !== pattern.split('').length) return false

    for (const [i, char] of pattern.split('').entries()) {
        if (!charMap.has(char) && usedWords.has(words[i])) {
            return false
        }

        if (!charMap.has(char)) {
            charMap.set(char, words[i])
            usedWords.add(words[i])
            continue
        }

        if (charMap.get(char) !== words[i]) {
            return false
        }
    }

    return true

};
// @lc code=end

