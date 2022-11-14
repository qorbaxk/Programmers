const solution = (s) => {
    let num = ['zero','one','two','three','four','five','six','seven','eight','nine'];
    let regex;
    for(let i=0; i<num.length; i++){
        regex = new RegExp(num[i],'g');
        s = s.replace(regex,i);
    }
   return Number(s);
}