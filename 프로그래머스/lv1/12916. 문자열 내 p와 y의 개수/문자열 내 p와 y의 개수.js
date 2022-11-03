const solution = (s) => {
    let p = [...s].filter(v=>v.toLowerCase()=='p');
    let y = [...s].filter(v=>v.toLowerCase()=='y');
    
    return p.length===y.length?true:false;
}