function solution(order) {
    /**
    1번 상자 ~ n번 상자 번호 증가 순서대로
    앞에서부터(1번부터) 상자를 내릴 수 있음
    
    기사가 알려준 순서대로 실어야됨
    맨앞에 있는거를 바로 싣지 않으면 보조컨테이너에 추가 -> 마지막에 보관한 것부터 꺼낼 수 있음
    */
    
    // 보조컨테이너
    const extraContainer = []
    // 택배박스 개수
    let truck = 0
    
    const original = order.map((v,i)=>[i+1,v]).sort((a,b)=>a[1]-b[1])
    
    
    for(let box of original){
        const [loc, ] = box

        // 보조에 있는 경우 확인
        if(extraContainer.length >0 && extraContainer[extraContainer.length-1][0] === truck+1){
            truck+=1
            extraContainer.pop()
        }

        // 실려야하는 순서가 현재 택배 실린것 개수 다음거가 아닐 때
        if(loc !== truck+1){
            extraContainer.push(box)
        }else{
            // 다음거가 맞을 때
            truck+=1
        }
    }
    
    // 보조컨테이너에서 꺼내야할 때
    while(truck>0 && extraContainer.length >0 && extraContainer[extraContainer.length-1][0]  === truck+1){
        // 보조에 있는 경우 확인
            truck+=1
            extraContainer.pop()
    }
    
    return truck
 
}