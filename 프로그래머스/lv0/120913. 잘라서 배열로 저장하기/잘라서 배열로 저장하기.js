const solution = (my_str, n) => {
    let str = [...my_str];
    let arr = [];
    
    while(str.length){
        arr.push(str.splice(0,n).join(''));
    }  
    
    
    return arr;
}