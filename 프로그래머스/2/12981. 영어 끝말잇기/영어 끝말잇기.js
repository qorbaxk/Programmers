function solution(n, words) {
    const memo = {}
    
    let answer = [0,0]
    
    // 마지막으로 끝난 단어
    let last = words[0][0]
    
    // 끝말잇기 시작
    for(let i=0; i<words.length; i++){
        
        const word = words[i]
    
        // 마지막 단어로 시작하면서 사용하지 않은 단어여야됨
        if(word.startsWith(last) && memo[word] === undefined){
            last = word[word.length-1]
            memo[word] = 1
            continue;
        }
        
        // 둘다 아닌 경우에
        answer[0] = i % n + 1
        answer[1] = Math.ceil((i+1)/n)
        break;
    }
    
    
    return answer
    
}