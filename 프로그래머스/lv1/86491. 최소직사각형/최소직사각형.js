const solution = (sizes) => {
    let arr1 = [];
    let arr2 = [];
    sizes = sizes.map(x=>x.sort((a,b)=>a-b));
    for(let i=0; i<sizes.length; i++){
        arr1.push(sizes[i][0])
        arr2.push(sizes[i][1])
    }
    return Math.max(...arr1)*Math.max(...arr2);
}