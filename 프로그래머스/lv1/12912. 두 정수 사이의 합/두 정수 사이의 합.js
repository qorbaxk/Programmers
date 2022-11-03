const solution = (a,b) => {
    let grid;
    if(a>b){
        grid = Array(Math.abs(a-b)+1).fill(b).map((arr, i) => {  
            return arr+i;
        })
    }else{
        grid = Array(Math.abs(a-b)+1).fill(a).map((arr, i) => {  
            return arr+i;
        })
    }
   
    return grid.reduce((x,y)=>x+y,0);
}