const solution = (rsp) => {
    return rsp.split('').map(x=>x==='2'?'0':x==='0'?'5':x==='5'?'2':x).join('')
}