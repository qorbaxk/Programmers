function solution(wallpaper) {
    let filesX = [];
    let filesY = [];
    wallpaper.forEach((wal,idx1)=>{
        wal.split('').forEach((file,idx2)=>{
            if(file==='#'){
                filesX.push(idx1)
                filesY.push(idx2)
            }
        })
    })
    console.log(filesX, filesY)
    let lux = Math.min(...filesX)
    let luy = Math.min(...filesY)
    let rdx = Math.max(...filesX)+1;
    let rdy = Math.max(...filesY)+1;
    
    return [lux,luy,rdx,rdy]
    
    
    
}