function solution(n,a,b){
    // 바로 옆 참가자랑 게임 진행
    // 라운드 업 하면 다시 idx 초기화
    
    // 경쟁자랑 몇라운드에서 만나는지 확인
    // [A,B] > 1, 2
    // [1,A,5,B] > 2, 4
    // [1,2,3,A,5,6,B,8] > 4, 7
    
    let round = 1;
    
    // 차이가 1이 될 때까지 진행
    while(Math.ceil(a / 2) !== Math.ceil(b / 2)){
        a = Math.ceil(a/2)
        b = Math.ceil(b/2)
        round++
    }
    
    return round
}