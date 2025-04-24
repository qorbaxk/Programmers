function solution(skill, skill_trees) {
    // 배움의 카운트를 정리하는 배열
    let learn = Array(skill.length).fill(0)
    
    // 가능한 스킬트리 개수
    let count = 0;
    
    // 스킬트리를 순회
    for(let tree of skill_trees){
        
        // 불가능한지 확인
        let impossible = false
        
        // 하나의 스킬트리 마다 순회 
        for(let sk of tree){
            // 현재 스킬의 인덱스 찾기
            let idx = skill.indexOf(sk)
        
            // 현재 스킬이 선행스킬에 있을 때만 진행
            if(idx !== -1){
                // 현재스킬이 맨 앞의 스킬이거나 선행스킬이 이미 진행됐는지 확인
                if(idx === 0 || learn[idx-1] !== 0){
                    // 진행이 가능한 경우니까 현재 스킬 배웠으므로 추가
                    learn[idx] += 1
                }else{
                    // 진행이 불가능한 경우 어차피 이 스킬은 안되는 것이므로 건너뛰기
                    impossible = true
                    break;
                }
            }
        }
        
        // 진행이 불가능한 경우가 아니였으면 카운트 증가
        if(!impossible){
            count++
        }
        // 하나의 스킬트리를 다 했으면 다시 초기화
        learn = Array(skill.length).fill(0)
    }
    
    
    return count
}