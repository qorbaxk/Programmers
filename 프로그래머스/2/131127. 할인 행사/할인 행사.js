function solution(want, number, discount) {
    // 10일동안 회원 자격 부여
    // 매일 한가지 제품 할인 하루에 하나만 구매 가능
  
    // 바나나 3개, 사과 2개, 쌀 2개, 돼지고기 2개, 냄비 1개
    // 1    2   3       4   5   6   7       8       9     10  11    12  13  14
    // 치킨, 사과, 사과, 바나나, 쌀, 사과, 돼지고기, 바나나, 돼지고기, 쌀, 냄비, 바나나, 사과, 바나나
    
    let count = 0;
    let day = 0
    while(day <= discount.length - 10){
        
        let numbers = [...number]
        for(let i=day; i<day+10; i++){
            
            // 현재 값이랑 일치하는 품목의 인덱스가 있는지 확인
            const findIdx = want.findIndex((v)=>v===discount[i])
            
            // 없으면 그냥 지나감
            if(findIdx !== -1){
                numbers[findIdx] -= 1
            }
        }
        
        // 전부다 0이 되는 경우
        if(numbers.every((v)=>v <= 0)){
            count++
        }
        
        // 전부다 0이 안되는경우 날짜 증가
        day++
        
    }
    return count
}