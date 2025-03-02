function solution(begin, target, words) {
    // target 이 words 에 없을 경우 변환 불가능하므로 0 리턴
    if(!words.includes(target)) return 0
    
    
    // 알파벳이 다른게 몇개인지 찾는 함수
    const diff = (a,b)=>{
        let diffCount = 0;
        for(let i=0; i<a.length; i++){
            if(a[i] !== b[i]) diffCount++
        }
        return diffCount
    }
    
    
    let result = 0;
    // 있을 경우에는 변환 시작
    const dfs = (now, count)=>{
        
        // 현재단어랑 타겟단어랑 하나 차이날때는 다 온거니까 그냥 여기서 컷 해도 됨
        if(diff(now, target) === 1){
            result = count+1
            return
        }
        
        // 타겟이 되었을 때는 count 반환
        if(now === target) {
            result = count
            return
        }
        
        const shf = words[0]
        words.shift()
        
        // 단어가 한개만 다를 때는 단어를 변경하여 진행
        if(diff(now, shf) === 1){
            dfs(shf, count+1)
        }else{
            // 단어가 다를 때는 다시 같은 단어로 진행
            dfs(now, count)
        }
        
    }
    
    dfs(begin, 0)
    
    return result
    
}