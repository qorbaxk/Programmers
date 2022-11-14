const solution = (n, arr1, arr2) => {
    let newArr = arr1.map((v,i)=>v|arr2[i]);
    newArr = newArr.map(v=>parseInt(v,10).toString(2).padStart(n,'0'));
    newArr = newArr.map(v=>v.replace(/1/g,'#').replace(/0/g,' '))
    return newArr;
}