const solution = (s,n) => {
    let code = [...s].map(v=>v.charCodeAt(0)!==32?v.charCodeAt(0)<91&&v.charCodeAt(0)+n>90?v.charCodeAt(0)+n-90+64:v.charCodeAt(0)+n>122?v.charCodeAt(0)+n-122+96:v.charCodeAt(0)+n:32);
    return code.map(x=>String.fromCharCode(x)).join('')
}