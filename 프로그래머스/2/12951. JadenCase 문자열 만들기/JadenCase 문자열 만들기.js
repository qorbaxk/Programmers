function solution(s) {
    // 모든단어의 첫 문자가 대문자, 그외 소문자
    const changeStr = s.toLowerCase().split(" ").map((str)=>{
        if(str.length === 0) return ""
        
        const first = str[0].toUpperCase()
        return first + str.slice(1)
        
    }).join(" ")
    
    return changeStr

}