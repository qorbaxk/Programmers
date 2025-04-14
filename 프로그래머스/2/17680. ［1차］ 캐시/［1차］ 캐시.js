function solution(cacheSize, cities) {
    // DB캐시 크기에 따른 실행시간 측정
    // LRU : 가장 오랫동안 참조되지 않은 것을 교체
    // 캐시사이즈에 맞는 배열 생성
    const cache = Array(cacheSize)
    // 캐시타임
    let time = 0;
    for(let city of cities){
        // 캐시에 존재하는 지 확인
        if(cache.includes(city.toLowerCase())){
            // 1. 존재한다면
            // 실행시간 1 추가
            time+=1
            const idx = cache.findIndex((v)=>v===city.toLowerCase())
            // 해당 부분 잘라내고 마지막에 추가
            cache.splice(idx,1)
            cache.push(city.toLowerCase())
        }else{
            // 2. 존재하지 않는다면
            // 실행시간 5 추가
            time+=5
            for(let i=0; i<cache.length-1; i++){
                // 다음에 있는걸 넣기
                cache[i] = cache[i+1]
            }
            // 현재 도시는 마지막에 추가
            cache[cache.length-1] = city.toLowerCase()  
        }
    }
    return time
}