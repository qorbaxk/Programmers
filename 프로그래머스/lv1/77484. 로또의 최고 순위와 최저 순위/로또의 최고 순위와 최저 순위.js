const solution = (lottos, win_nums) => {
    let min = win_nums.filter(v=>lottos.includes(v)).length;
    let max = min + lottos.filter(v=>v===0).length;
    
    const rank = (num)=>{
        switch(num){
            case 6 : return 1;
            case 5 : return 2;
            case 4 : return 3;
            case 3 : return 4;
            case 2 : return 5;
            case 1 : return 6;
            case 0 : return 6;
        }
    }
    return [rank(max),rank(min)];
}