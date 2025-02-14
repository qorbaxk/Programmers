function solution(word) {
    
    const book = ['A', 'E', 'I', 'O', 'U']
    // 현재 단어가 몇번째인지 카운팅하는 값
    let count = 0;
    // 결과 넣을 변수
    let result = 0;
    
    // 백트래킹할 함수
    const dfs = (w)=>{
        // 해당 글자가 같으면 거기서 멈춤
        if(w === word){
            result = count
            return;
        } 
        
        // 글자수가 5를 넘어가면 진행하지 않음
        if(w.length >= 5){
            return
        }
        
        for(let i=0; i<book.length; i++){
            count++
            dfs(w+book[i])
        }
        
    }
    
    dfs('')
    return result
    
}