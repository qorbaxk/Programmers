const solution = (num_list, n) =>{
       
        let cnt = Math.floor(num_list.length / n) + 
            (Math.floor(num_list.length % n) > 0 ? 1 : 0);
        let tmp = [];
 
        for (let i = 0; i < cnt; i++) {
            tmp.push(num_list.splice(0, n));
        }
 
        return tmp;
}