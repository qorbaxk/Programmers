function solution(array, commands) {
    let answer = []
    const sorted = (arr, com)=>{
        let i = com[0]
        let j = com[1]
        let k = com[2]
        let newArr = arr.slice(i-1,j)
        newArr.sort((fir,sec)=>fir>sec?1:-1)
        return newArr[k-1]
    }
    
    for(let command of commands){
        answer.push(sorted(array, command))
    }
    
    return answer
}