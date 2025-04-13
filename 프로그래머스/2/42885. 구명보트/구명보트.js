function solution(people, limit) {
    /**
    구명보트는 최대 2명 탑승 가능
    무게제한 확인
    구명보트 최대한 적게 사용
    */
    
    // 일단 무게 순으로 정렬함
    people.sort((a,b)=>a-b)
    
    let count = 0
    
    while(people.length>0){
        // 제일 가벼운사람과 제일 무거운 사람을 같이 태우는게 제일 효과적
        if(people[0] + people[people.length-1] > limit){
            // 만약 초과해버린다면, 제일 무거운 사람 빼고
            people.pop()
            // 보트 하나 보냄
            count++
        }else{
            // 만약 가능하다면 같이 태워보냄
            people.pop()
            people.shift()
            count++
        }
    }
    
    return count
    
}