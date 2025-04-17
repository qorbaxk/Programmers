function solution(land) {
    // 행마다 4열
    // 한 행에서 한 칸만 밟을 수 있음
    // 같은 열을 연속해서 밟을 수 없음
    // 점수의 최댓값 
    const dp = Array.from({ length: land.length }, () => Array(4).fill(0));

    for (let i = 0; i < land.length; i++) {
        for (let j = 0; j < 4; j++) {
            // 첫번째 줄이면 윗 줄 없으니까 그냥 값 저장
            if (i === 0) {
                dp[i][j] = land[i][j];
            } else {
                // 2번째 줄 부터 시작
                let maxPrev = 0;
                for (let k = 0; k < 4; k++) {
                    if (k !== j) {
                        maxPrev = Math.max(maxPrev, dp[i - 1][k]);
                    }
                }
                // 가장 맥스인 값을 더해서 저장
                dp[i][j] = land[i][j] + maxPrev;
                // 위에서 부터 저장해오면서 내려오면
            }
        }
    }

    // 마지막에 가장 큰 값이 제일 큰 값임
    return Math.max(...dp[land.length - 1]);
}