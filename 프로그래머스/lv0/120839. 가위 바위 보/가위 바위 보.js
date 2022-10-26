const solution = (rsp) => {
    return rsp.split('').map(x=>x==='2'?x.replace('2','0'):x==='0'?x.replace('0','5'):x==='5'?x.replace('5','2'):x).join('')
}