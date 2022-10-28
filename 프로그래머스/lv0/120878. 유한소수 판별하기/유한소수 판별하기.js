const solution = (a,b) => {
    let div = [];
    
    const getdiv = (num) => {
        for(let i=1; i<=Math.sqrt(num); i++){
            if(num % i === 0){
                div.push(i) ;
                if(num / i != i) div.push(num / i);
            }
        }
    }
    getdiv(a);
    getdiv(b);
    
    let dup = div.filter((v,i)=>div.indexOf(v) !== i && v !== 1);
    let yak = Math.max(...dup)
    b = dup.length ? b/yak : b;
    
    div.length = 0;
    
    while(b%2 == 0){
        div.push(2);
        b /= 2;
    }
    for(let i=3; i*i<=b; i+=2){
        while(b%i == 0){
            div.push(i);
            b /= i;
        }
    }
    if(b>2){
	    div.push(b);
    }
    return div.filter(x=> x!==2 && x!==5).length ? 2: 1;
 
}
    
    
    
    
