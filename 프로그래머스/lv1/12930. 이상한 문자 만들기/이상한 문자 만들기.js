const solution = (s) => {
    s = s.split(' ');
    s = s.map(v=>[...v].map((x,i)=>i%2?x.toLowerCase():x.toUpperCase()));
    return s.map(x=>x.join('')).join(' ')
}