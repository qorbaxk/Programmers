function solution(n){
    /**
    1. k 칸 점프 => k 만큼의 건전지 사용
    2. 현재까지 온 거리 * 2 순간이동 => 건전지 사용 x => 더 효율적
    
    건전지 사용량의 최솟값 return
    */
    
    let power = 0;
    
    while(n > 0){
        // 짝수이면 나눠
        if(n%2 === 0){
            n = n / 2
        }else{
            // 홀수이면 1 빼
            n = n - 1
            // k칸 움직일 때마다 스톤 사용
            power++
        }
    }
    
    return power
    
}