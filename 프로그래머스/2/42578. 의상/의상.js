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
       result *= value+1
      
    }
    
    return result-1
    
   
    
}