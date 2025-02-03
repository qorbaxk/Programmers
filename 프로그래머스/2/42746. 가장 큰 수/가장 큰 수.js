function solution(numbers) {
    /** 해설을 참고하였음 */
    
    // 1번방식: 재귀함수를 사용한 퀵정렬
//     if(numbers.length <= 1) return numbers.join('')
    
//     // 기준점이 되는 pivot 을 세우고, 좌측과 우측으로 나누어 나열할 것
//     const pivot = numbers[0]
//     const left = []
//     const right = []
    
//     for(let i=1; i<numbers.length; i++){
//         // pivot 에다가 앞뒤로 현재 보고있는 숫자값을 넣어서 더 큰수를 확인
//         const a = numbers[i].toString() + pivot.toString()
//         const b = pivot.toString() + numbers[i].toString();
        
//         if(Number(a)>Number(b)){
//             left.push(numbers[i])
//         }else{
//             right.push(numbers[i])
//         }
//     }
    
    
//     return solution(left) + pivot.toString() + solution(right)
    
    
    // 2번방식: sort 메소드를 사용한 정렬
       numbers.sort((a,b) => {
        a = a.toString();
        b = b.toString();
        return parseInt(b+a) - parseInt(a+b)
    })
    return numbers[0] == 0 ? "0" : numbers.join("");
}