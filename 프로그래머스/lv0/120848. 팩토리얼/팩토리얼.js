const solution = (n) => {
    let result = 1;
    let i;
    for(i=2; i<=10; i++){
        result *= i;
        if(result > n){
            break;
        }
    } 
         return i-1;
}
