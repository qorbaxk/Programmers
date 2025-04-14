function solution(s) {
    
    // 올바른 괄호인지 확인하는 로직
    const check = (str)=>{
        // 각각의 세트인 괄호들
        const obj = {
            "[":"]",
            "(":")",
            "{":"}",
        }
        const queue = []   
        for(let i=0; i<str.length; i++){
            let last = queue[queue.length-1]
            // 같은 세트의 괄호라면
            if(obj[last] === str[i]){
                // 현재 들어가있는 괄호 빼내기
                queue.pop()
            }else{
                // 같지 않다면 추가
                queue.push(str[i])
            }
        }
        
        // 길이가 0이면 올바른괄호이므로 true 리턴
        return queue.length === 0 ? true : false
    }
    
    // 문자열 회전 시키는 로직
    const rotate = (str, n)=>{
        return str.slice(n,) + str.slice(0,n)
    }
    
    // 올바른 괄호 문자열 갯수
    let count = 0;
    
    // s의 길이만큼 회전 시킴
    for(let x=0; x<s.length; x++){
        // 회전 시킨 문자열
        const newStr = rotate(s,x)
        
        if(check(newStr)){
            count++
        }
    }
    
    return count
    
    
}