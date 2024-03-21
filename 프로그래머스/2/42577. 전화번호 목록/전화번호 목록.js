function solution(phone_book) {
    let map = new Map()
    phone_book.forEach((book)=>map.set(book,''))
    
    for(let [key,value] of map){
        for(let i=1; i<key.length; i++){
            let start = key.slice(0,i)
            
            if(map.has(start)) return false
        }
        
    }
    return true

}