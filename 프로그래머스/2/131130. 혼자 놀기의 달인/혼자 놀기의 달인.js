function solution(cards) {
    const visited = Array.from({length:cards.length},()=>false)
    const groups = []
    
    for (let i=0; i<cards.length; i++){
        // 열지 않았을 때만 진행
        if(!visited[i]){
            let count = 0
            let current = i

            // 현재 i 번째에서 시작할 때 그 다음에 이어지는 상자도 열려있지 않았을 때만 진행
            while(!visited[current]){
                visited[current] = true
                // 상자에서 나온 카드로 다음 인덱스 지정
                current = cards[current] - 1
                count++
            }

            // 그룹의 문을 닫는 경우 저장
            groups.push(count)
        }
    }
    
    // 내림차순으로 정리
    groups.sort((a,b)=>b-a)
    return groups.length >= 2 ? groups[0]*groups[1] : 0
}