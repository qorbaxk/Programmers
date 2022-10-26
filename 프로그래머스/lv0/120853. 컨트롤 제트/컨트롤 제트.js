const solution = (s) => {
    s = s.split(' ');
    let indexes = [], i;
    
    for(i = 0; i < s.length; i++)
        if (s[i] === 'Z' && s[i+1] === 'Z'){
            indexes.push(i, i-1, i-2);
        }else if (s[i] === 'Z'){
            indexes.push(i, i-1);
        }   
 
    indexes.sort();
    
    if(indexes.length > s.length){
        return 0;
    }
    
    let realNum = s.filter((v,i)=>!indexes.includes(i));
    
    return realNum.map(Number).reduce((a,b)=>a+b,0)
    
    
}