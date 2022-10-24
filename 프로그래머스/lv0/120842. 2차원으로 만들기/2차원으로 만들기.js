const solution = (num_list, n) =>{
       
    let tmp = [];
    
    while(num_list.length){
        tmp.push(num_list.splice(0, n));
    }
      
    return tmp;
}