function solution(phone_book) {
    // let map = new Map()
    let map = new Set()
    // phone_book.forEach((book)=>map.set(book,''))
    phone_book.forEach((book)=>map.add(book,''))
    
    for(let key of map){
        for(let i=1; i<key.length; i++){
            let start = key.slice(0,i)
            
            if(map.has(start)) return false
        }
        
    }
    return true

}

