function solution(clothes) {
    const map = new Map()
    // 맵객체를 사용하여 옷을 카테고리별로 분류함
    for(let clo of clothes){
        if(map.has(clo[1])){
            map.set(clo[1], [...map.get(clo[1]),clo[0]])
        }else{
            map.set(clo[1], [clo[0]])       
        }
    }
    /**
    경우의 수 구하기
    각 카테고리 별로 '선택안함' 의 조건이 포함되어있기 때문에
    아이템 + 1(선택안함) 로 계산하며 각 카테고리에서 '모두 선택을 안하는 경우' 1가지를 제외해야 됨
    */
    return [...map.values()].reduce((a,b)=>a*(b.length+1),1) - 1
}