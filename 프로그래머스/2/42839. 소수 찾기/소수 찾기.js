function solution(numbers) {
    /**
    한자리 숫자가 적힌 종이조각 : 0 ~ 9
    종이조각으로 만들 수 있는 소수 ?
    */
    
    // 종이조각으로 모두 나눔
    const papers = numbers.split('')
    
    // 소수를 담는 배열
    const allNum = []
    
    // 모든 종이조각을 만든다..
    const generatePermutations = (arr, chosen = []) => {
      if (chosen.length > 0) {
        // 선택한 숫자로 이루어진 조합을 추가
        const num = parseInt(chosen.join(''))
        
        
        let isPr = true
        
        // 숫자가 소수일때만 추가
        for(let i=2; i<num; i++){
             // 하나라도 나눠떨어지는게 있다면 소수가 아님
            if(num % i === 0){
                isPr = false
                break;
            }
        }
          
        // 소수라면 추가
        if(isPr && !allNum.includes(num) && num > 1){
            allNum.push(num);  
        }
        
      }

      for (let i = 0; i < arr.length; i++) {
        // 현재 선택한 숫자 제외
        const nextArr = [...arr.slice(0, i), ...arr.slice(i + 1)]; 
        generatePermutations(nextArr, [...chosen, arr[i]]);
      }
    };
    
    // 모든 종이조각으로 만들 수 있는 수 만들기
    generatePermutations(papers)
    
    return allNum.length
}