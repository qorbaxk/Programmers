function solution(i, j, k) {
   let arr =[]
    for(let t=i; t<=j; t++){
       arr.push(t.toString())
   }
    return arr.join('').split('').filter(v=>v===k.toString()).length
}