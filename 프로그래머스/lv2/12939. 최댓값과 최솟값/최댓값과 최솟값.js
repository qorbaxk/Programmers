const solution = (s) => {
    s = s.split(" ");
    s = s.map(v=>Number(v)).sort((a,b)=>a-b);
    let min = s.shift();
    let max = s.pop();
    return `${min} ${max}`;
}