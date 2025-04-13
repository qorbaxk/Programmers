function solution(k, tangerine) {
    const map = new Map();

    // 각 귤 크기별 개수 카운팅
    for (const t of tangerine) {
        map.set(t, (map.get(t) || 0) + 1);
    }

    // 개수를 기준으로 내림차순 정렬
    const counts = Array.from(map.values()).sort((a, b) => b - a);
    
    // 귤의 종류
    let type = 0;
    // 귤의 갯수
    let sum = 0;
    

    for (const count of counts) {
        sum += count;
        type++;
        if (sum >= k) break;
    }

    return type;

}