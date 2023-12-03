/**
 * @param {string} s
 * @param {number} k
 * @return {number}
 */
var characterReplacement = function(s, k) {
    const map = {};
	let max = 0; 
	let maxCnt = 0;

	let left = 0;
	let right = 0;

	while (right < s.length) {
		const n = s[right];

		map[n] = map[n] + 1 || 1;
		maxCnt = Math.max(maxCnt, map[n]); 


		while (right - left + 1 - maxCnt > k) {
			map[s[left]]--; 
			left++; 
		}

		max = Math.max(max, right - left + 1);
		right++;
	}

	return max;
};