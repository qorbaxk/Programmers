const solution = (s) => {
    
    const result = [...s].reduce((accu, curr) => { 
     accu[curr] = (accu[curr] || 0)+1;  
     return accu;
    }, {});
    
    const str = Object.keys(result).filter(key => result[key] === 1).sort().join('');
    return str;
}