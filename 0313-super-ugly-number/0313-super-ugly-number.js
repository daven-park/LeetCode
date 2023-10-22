/**
 * @param {number} n
 * @param {number[]} primes
 * @return {number}
 */
var nthSuperUglyNumber = function(n, primes) {
    const time = Array(primes.length).fill(0);
	const dp = [1];

	for (let i = 1; i < n; i++) {
		dp[i] = Infinity;

		primes.forEach((value, idx) => {
			const uglyNum = dp[time[idx]] * value;
			dp[i] = Math.min(dp[i], uglyNum);
		});

		primes.forEach((value, idx) => {
			const uglyNum = dp[time[idx]] * value;
			dp[i] === uglyNum && (time[idx] += 1);
		});
	}
	return dp[n - 1];
};