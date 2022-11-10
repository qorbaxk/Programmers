const solution = (arr) => {
    let answer =[arr[0]];
    arr.forEach(v=>{
        v!==answer[answer.length-1]?answer.push(v):null;
    })
    return answer;
}