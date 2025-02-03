function solution(array, commands) {
  return commands.map((command)=>{
      /**
        1. i ~ j 번째 까지 자르기
        2. 오름차순으로 정렬
        3. k 번째에 있는 수로 리턴
      */
      const [i,j,k] = command     
      const newArray = array.slice(i-1,j)
      const sortedArr = newArray.sort((a,b)=>a-b)
      return sortedArr[k-1]
  })
}