// 242. Valid Anagram

// Given two strings s and t, return true if t is an anagram of s, and false otherwise.

// An Anagram is a word or phrase formed by rearranging the letters of a different word or phrase, typically using all the original letters exactly once.

 

// Example 1:

// Input: s = "anagram", t = "nagaram"
// Output: true
// Example 2:

// Input: s = "rat", t = "car"
// Output: false
 

// Constraints:

// 1 <= s.length, t.length <= 5 * 104
// s and t consist of lowercase English letters.
 

// Follow up: What if the inputs contain Unicode characters? How would you adapt your solution to such a case?

function isAnagram(s: string, t: string): boolean {
  if (s.length !== t.length) return false;
  
  const count: { [key: string]: number } = {};
  
  for (let char of s) {
      count[char] = (count[char] || 0) + 1;
  }

  for (let char of t) {
      if (!count[char]) return false;
      count[char]--;
  }

  return Object.values(count).every(value => value === 0);
};