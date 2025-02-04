function solution(citations) {
    /**
    HI는 과학자의 생산성과 영향력을 나타내는 지표
    
    발표한 논문 n
    h번 이상 인용된 논문이 h편 이상
    h번 이하 인용되었다면 h의 최댓값이 HI
    
    citations는 논문의 인용횟수
    */
    let n = citations.length;
    // 내림차순으로 논문을 정렬
    const sorted = citations.sort((a,b)=>b-a)
    
    let h = 0;
    for(let i=0; i<n; i++){
        
        // 논문을 순회하면서 인용된 횟수가 현재값보다 크거나 같은지 확인
        if(h < sorted[i]){
            h++
        }else{
            return h
        }
        
         // 끝까지 다 순회했는데, 결국 h가 n의 갯수까지 채우지 못했다면 전부다 인용된 것이므로 논문 갯수로 리턴
        if(n-1 === i && h <= n){
            return n
        }
    }
    
    
    
}