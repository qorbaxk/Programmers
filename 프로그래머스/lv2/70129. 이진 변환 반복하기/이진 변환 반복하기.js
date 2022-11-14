const solution = (s) => {
    let count = 0;
    let zero = 0;
        
     while(s!=='1'){
        zero += s.match(/0/g)?s.match(/0/g).length:0;
        s = s.replace(/0/g,"").length.toString(2);
        count++;
    }
    return [count,zero];

}