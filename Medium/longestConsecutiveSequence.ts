// 128. Longest Consecutive Sequence

// Given an unsorted array of integers nums, return the length of the longest consecutive elements sequence.

// You must write an algorithm that runs in O(n) time.

// Example 1:

// Input: nums = [100,4,200,1,3,2]
// Output: 4
// Explanation: The longest consecutive elements sequence is [1, 2, 3, 4]. Therefore its length is 4.
// Example 2:

// Input: nums = [0,3,7,2,5,8,4,6,0,1]
// Output: 9

// Constraints:

// 0 <= nums.length <= 105
// -109 <= nums[i] <= 109

function longestConsecutive(nums: number[]): number {
  const numbers = new Set(nums);
  let longestLength = 0;

  for (let i = 0; i < nums.length; i++) {
    let currentLongestLength = 0;

    if (!numbers.has(nums[i] - 1)) {
      currentLongestLength = 1;
    }

    let j = nums[i] + 1;

    if (!numbers.has(j)) {
      longestLength = Math.max(longestLength, currentLongestLength);
      continue;
    }

    while (numbers.has(j)) {
      currentLongestLength++;
      j++;
    }
    
    longestLength = Math.max(longestLength, currentLongestLength);
  }

  return longestLength;
}
