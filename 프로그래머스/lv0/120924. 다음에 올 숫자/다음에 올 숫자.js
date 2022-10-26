const solution = (common) => {
    let seq;
    
    if(common[1]-common[0] === common[2]-common[1]){
        seq = common[1]-common[0];
        return common[common.length-1]+seq;
    }else if(parseInt(common[1]/common[0]) === parseInt(common[2]/common[1])){
        seq = parseInt(common[1]/common[0]);
        return common[common.length-1]*seq;
    }
}