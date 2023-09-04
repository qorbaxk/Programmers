function solution(a, b, g, s, w, t) {
    let answer = 10e5 * 4 * 10e9; // 엄청 큰 값으로 미리 설정
    
    let start = 0;
    let end = 10e5 * 4 * 10e9;
    
    while( start <= end) { //시작이 끝보다 크면 와일문 종료
        let mid = Math.floor((start + end) / 2); //시작과 끝의 중간값으로 이분탐색시작
        let gold = 0; // 특정시간 t 동안 얻을 수 있는 최대 골드수
        let silver = 0; // 특정시간 t 동안 얻을 수 있는 최대 실버수
        let add = 0; // 특정시간 t 동안 골드와 실버를 한번에 얻을 수 있는 최대수
        
        for( let i =0; i < s.length; i++ ) { // 마을을 돈다
            let now_g = g[i]; // 현재 마을의 보유 골드량
            let now_s = s[i]; // 현재 마을의 보유 실버량
            let now_w = w[i]; // 현재 마을이 최대로 옮길 수 있는 중량
            let now_t = t[i]; // 현재 마을을 편도로 이동할 때 시간
            
            let move_cnt = Math.floor(mid / (now_t * 2)); // 현재 마을에서 옮길 수 있는 총 횟수
            if(mid % (now_t * 2) >= t[i]) move_cnt++; // 나머지가 t[i] 보다 크면 1번 편도 가능하여 추가

            gold += (now_g < move_cnt * now_w) ? now_g : move_cnt * now_w;
            silver += (now_s < move_cnt * now_w) ? now_s : move_cnt * now_w;
            add += (now_g + now_s < move_cnt * now_w) ? now_g + now_s : move_cnt * now_w;
        }
        
        
        if(gold >= a && silver >= b && add >= a + b) {
            end = mid - 1;
            answer = Math.min(mid, answer);
        }else {
            start = mid + 1;
        }
    }
    
    return answer;
}