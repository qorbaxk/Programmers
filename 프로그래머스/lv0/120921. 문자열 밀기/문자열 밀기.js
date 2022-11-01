const solution = (A,B) => { 
    if(A===B){
        return 0;
    }
    
    A = [...A];
    for(let i=0; i<A.length; i++){
        let removed = A.pop();
        A.unshift(removed);
        
        if(A.join('')===B){
            return i+1;
        }
    }
    return -1;   
}