function solution(a, b) {
    let dayWeek = ['THU','FRI','SAT','SUN','MON','TUE','WED'];
    let one = [1,3,5,7,8,10,12];
    let zero = [4,6,9,11];
    let days = 0;
    for(let i=1; i<a; i++){
       if(one.includes(i)){
         days += 31;
       }else if(zero.includes(i)){
            days += 30;
       }else{
           days += 29;
       }
    }
    days += b;
    return dayWeek[days%7]
}