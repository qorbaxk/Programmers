const solution = (my_string,n) => {
    let arr = [...my_string];
    return arr.map(x=>x.repeat(n)).join('');
}