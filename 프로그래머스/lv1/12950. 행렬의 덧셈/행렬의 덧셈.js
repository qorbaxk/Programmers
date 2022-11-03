const solution = (arr1,arr2) => {
    let x = arr1[0].length;
    let y = arr1.length;
    let result = [];
    let tmp = [];
    
    for(let i=0; i<y; i++){
        for(let j=0; j<x; j++){
            result.push(arr1[i][j]+arr2[i][j])
        }
    }
    while(result.length){
        tmp.push(result.splice(0, x));
    }
    return tmp;
}