function solution(s) {
    // 모든 0 제거
    // 길이가 c 이면 c 를 2진법으로 표현
    // 변환횟수, 1이될때까지 제거된 모든 0의 개수
    
    const answer = [0,0]

    // 0 제거 및 0 제거 횟수 저장로직
    const calc = (str)=>{   
        let length = 0
        for(let i=0; i<str.length; i++){
            // 1일때랑
            if(str[i] === '1'){
                length += 1
            }else{
                // 0일때
                answer[1] += 1
            }
        }
        // 길이를 이진법으로 변환
        return length.toString(2)
    }
    
    let text = s
    
    while(text !== '1'){
        text = calc(text)
        answer[0] += 1
    }
    
    return answer
}