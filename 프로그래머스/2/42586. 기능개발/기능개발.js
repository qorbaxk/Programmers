function solution(progresses, speeds) {
     /**
    진도는 100이 되어야 배포 가능
    progresses : 먼저 배포되어야 하는 순서대로 작업의 진도가 적힌 정수 배열
    speeds : 각 작업의 개발 속도가 적힌 정수 배열 (하루에 작업 가능한 양)
    result : 각 배포마다 몇개의 기능이 배포되는가?
    */
    
    // 각 기능마다 배포까지 걸리는 날짜
    const days = []
        
    for(let i=0; i<progresses.length; i++){
        // 남은 작업량
        const rest = 100 - progresses[i]
        // 개발속도로 진행할때 걸리는 날짜
        const day = Math.ceil(rest/speeds[i])
        days.push(day)
    }
    
    
    
    // 누적되는 현재 날짜
    let sumDay = days[0]
    // 반환할 결과 배열 [배포한날짜, 배포할기능갯수] 형태로 설정
    const result = [[days[0],1]]
        
    for(let i=1; i<days.length; i++){
        // result 배열의 마지막 인덱스 값
        let lastIdx = result.length -1
        // 마지막 배포 일자
        let lastDay = result[lastIdx][0]
        // 마지막 배포일자보다 이번 기능의 걸리는 일수가 작다면 이전배포와 같이 끝내게 됨
        if(lastDay >= days[i]){
            /** 
            걸리는 시간이 현재 날짜보다 작다면 이미 완성된 것이므로 이전 단계에 추가
            추가될때 바로 직전에 추가하는 것이 아니라 배포를 진행한 마지막 날짜에 추가해야됨
            */
            const [day, cnt] = result[lastIdx]
            result[lastIdx] = [day, (cnt || 0) + 1 ]
        }else {
            // 배포하는 날짜에 현재 날짜를 추가
            sumDay += (days[i] - sumDay)
            // 걸리는 시간이 현재날짜보다 크다면 새로 배포해야하므로 현재 단계에 추가
           result[lastIdx+1] = [sumDay, 1]
           
        }
        
        
    }
    
    console.log(days,result, sumDay)
    
    return result.flatMap(([a,b])=>b)
 
}