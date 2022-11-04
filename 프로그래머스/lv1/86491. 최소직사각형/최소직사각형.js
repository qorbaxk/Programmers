const solution = (sizes) => {
    sizes = sizes.map(x=>x.sort((a,b)=>a-b));
    let arr1 = sizes.map(v=>v.filter((v,i)=>i===0)).flat();
    let arr2 = sizes.map(v=>v.filter((v,i)=>i===1)).flat();
    return Math.max(...arr1)*Math.max(...arr2);
}