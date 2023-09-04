function solution(number) {
    let answer = 0;
    for(let i=0; i<number.length; i++){
        for(let j=i+1; j<number.length; j++){
         
            let part1 = number[i]+number[j]
            for (let k=j+1; k<number.length; k++){
                if(part1+number[k]===0){
                    answer++
                }
            }
        }
    }
    return answer
}