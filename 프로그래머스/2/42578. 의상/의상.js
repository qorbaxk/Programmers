function solution(clothes) {
    let map = new Map()
    clothes.forEach(([value, key])=>{
        
        if(map.has(key)){
            const prev = map.get(key)
            map.set(key,prev+1)
        }else{
        
        map.set(key,1) 
        }
        
    })
    
    let result = 1;
    
    for(let [key, value] of map){
        // 옷 종류 별로 곱해서 계산
        // 이때 +1 하는 경우는 아무것도 안입을때를 추가적으로 계산
       result *= value+1
      
    }
    
    // 모든 종류의 옷을 안 입는 1경우를 뺌
    return result-1
    
   
    
}