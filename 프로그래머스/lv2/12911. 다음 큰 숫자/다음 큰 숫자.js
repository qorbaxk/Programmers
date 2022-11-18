const solution = (n) => {
    let one = n.toString(2).match(/1/g).length;
    let next = n+1;
    while(one!==next.toString(2).match(/1/g).length){
        next++;
    }
    return next;
}

