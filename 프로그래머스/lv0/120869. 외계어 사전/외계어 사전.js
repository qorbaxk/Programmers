const solution = (spell, dic) => {
    return dic.filter(v=>spell.every(s=>v.includes(s))).length ? 1 : 2;
}