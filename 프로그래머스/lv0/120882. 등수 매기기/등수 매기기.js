const solution = (score) => {
    
    let avg = score.map(array=>array.reduce((a,b)=>a+b,0)).map(x=>x/2);
    let rank = [...avg].sort((a,b)=>b-a)

    return avg.map(x=>rank.indexOf(x)+1)   
}