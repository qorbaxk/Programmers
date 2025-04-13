function solution(n) {
    // 피보나치 수 F(n) = F(n-1) + F(n-2)
    
    const dp = [0,1]
    
    for(let i=2; i<=n; i++){
        dp[i] = (dp[i-1] + dp[i-2])%1234567 
    }
    
    return dp[n]
}