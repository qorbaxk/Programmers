const solution = (s) => {
    s = s.split(" ");
    s= s.map(word=>word.slice(0,1).toUpperCase()+word.slice(1).toLowerCase());
   
    return s.join(' ');
}