const solution = (n) => {
    let curse = Array(300).fill().map((v,i)=>i+1);
    curse = curse.filter(x=>x%3!==0).map(x=>x.toString()).filter(x=>!x.includes('3')).map(Number).filter((v,i)=>i<100);
    
    return curse[n-1];

}