function solution(orders, course) {
    // 가장 많이 함께 주문한 단품메뉴들을 코스요리 메뉴로 구성
    // 최소 2가지 이상의 메뉴
    // 최소 2명 이상의 손님으로부터 주문된
    
    // 부분집합을 만들고 갯수를 세는게 좋을 듯
    
    const map = new Map()
    const dfs = (list, idx, arr)=>{
        if(idx === list.length){
            // 전체 다 돌았으면 그만
            if(arr.length > 1){
                const menu = arr.join("")
                if(map.has(menu)){
                    map.set(menu,map.get(menu)+1)
                }else{
                    map.set(menu,1)
                }
            }
            return
        }
        
        arr.push(list[idx])
        dfs(list, idx+1, arr)
        
        arr.pop()
        dfs(list, idx+1, arr)
    }
    
    
    for(let i=0; i<orders.length; i++){
        const list = orders[i].split("").sort()
        dfs(list, 0, [])
    }
    
    
    function getMaxKeysByLength(map, n) {
        let max = 0;
        const result = [];

        // 먼저 key의 길이가 n인 것 중 max value 구하기
        for (const [key, value] of map.entries()) {
            if (key.length === n && value >= 2) {
                if (value > max) {
                    max = value;
                }
            }
        }

        // 다시 한번 돌면서 max인 key들만 모으기
        for (const [key, value] of map.entries()) {
            if (key.length === n && value === max) {
                result.push(key);
            }
        }

        return result;
    }
    
    const answers = []
    for(const c of course){
        answers.push(...getMaxKeysByLength(map,c))
    }
    
    
    return answers.sort()
    
    
}