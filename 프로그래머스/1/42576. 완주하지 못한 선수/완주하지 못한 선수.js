function solution(participant, completion) {
  // 효율성 제로로 실패.. ㅋ
  //  // 참가자 명단 순차적으로 완주자명단에 있는지 확인
  //   let copy = [...completion]
  //   // 참가자 명단으로 순회
  // for(let part of participant){
  //     // 1. 해당 참가자가 완주자명단에 존재
  //     if(copy.includes(part)){
  //         /** 
  //         해당 참가자를 완주자명단에서 인덱스를 알아내 해당 배열에서 제거
  //         동명이인이 있을 수 있으므로 filter 대신 idx 로 제거함
  //         */
  //         const idx = copy.findIndex((c)=>c === part)
  //         copy.splice(idx,1)
  //     }else{
  //         // 2. 해당 참가자가 완주자명단에 존재하지 않을 경우 바로 반환
  //         return part
  //     }
  // }
    
    
  // 2번째 방법...
    
    // 참가자명단과 완주자명단을 모두 알파벳순으로 정렬
    const sortedP = participant.sort()
    const sortedC = completion.sort()
    
    // 0번인덱스부터 순회하며 다른 값일 때 해당 참가자를 리턴하도록 설정
    for(let i=0; i<sortedP.length; i++){
        if(sortedP[i] !== sortedC[i]){
            return sortedP[i]
        }
    }
}