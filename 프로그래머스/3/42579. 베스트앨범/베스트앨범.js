function solution(genres, plays) {
    /** 조건 
    0. 장르 별로 많이 재생된 노래 2개씩을 모은다.
    1. 속한 노래가 많이 재생된 장르를 먼저 수록합니다.
    2. 장르 내에서 많이 재생된 노래를 먼저 수록합니다.
    3. 장르 내에서 재생 횟수가 같은 노래 중에서는 고유 번호가 낮은 노래를 먼저 수록합니다.
    */
    const map = new Map()
    
    // 1. 장르를 key로 하여 [재생횟수, 고유번호] 형태로 저장
    for(let i=0; i<genres.length; i++){
        if(map.has(genres[i])){
            map.set(genres[i], [...map.get(genres[i]), [plays[i],i]])
        }else{
            map.set(genres[i],[[plays[i],i]])
        }
    }
    
    const playMap = new Map()
    
    // 2. 각 장르별로 재생횟수를 알아야하기 때문에 key값을 재생횟수로 변환
    map.forEach((value, key)=>{
        const newKey = value.reduce((a,b)=>a+b[0],0)
        playMap.set(newKey, value)
    })
    
    // 3. 각 장르별로 재생횟수가 많은 순대로 정렬하고 2개 빼고 나머지는 제거함
    playMap.forEach((value, key)=>{
        playMap.set(key, value.sort((a,b)=>b[0]-a[0]).slice(0,2))
    })
    
    // 4. 재생횟수의 합이 큰 순서대로 내림차순 정렬하여 배열 생성
    const result = [...playMap.entries()].sort((a,b)=>Number(b[0]) - Number(a[0])).flatMap(([_, values])=>values.map((v)=>v[1]))
    
    return result    
}
