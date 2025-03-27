function solution(triangle) {
    const dp = triangle.map(row => [...row]);

    for (let i = dp.length - 2; i >= 0; i--) {
        for (let j = 0; j <= i; j++) {
            dp[i][j] += Math.max(dp[i + 1][j], dp[i + 1][j + 1]);
        }
    }

    return dp[0][0];
}