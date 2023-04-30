function solution(myString) {
   let lower = myString.toLowerCase()
   return [...lower].map(v=>v==='a'?'A':v).join('')
}