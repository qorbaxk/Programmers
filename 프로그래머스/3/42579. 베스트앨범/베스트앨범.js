// function solution(genres, plays) {
//     let map = new Map()
//     genres.forEach((key,idx)=>{
       
//         if(map.has(key)){
//             const prev = map.get(key)
//             let obj = {
//                 [idx]:plays[idx]
//             }
//             map.set(key,{...prev, ...obj})
            
//         }else{
            
//             let obj = {
//                 [idx]:plays[idx]
//             }
//             map.set(key, obj)
//         }
//     })
    
//     let map2 = new Map()
    
//     for(let [key,value] of map){
        
//         const keys = Object.entries(value).sort((a,b)=>b[1]-a[1]).slice(0,2)
//         let list = [Number(keys[0][0]),Number(keys[1][0])]
//         const values = Object.values(value).reduce((a,b)=>(a+b),0)
//         map2.set(list,Number(values))
//     }
    
//     let result = new Map([...map2].sort((a, b) => a[1] - b[1]).reverse());
    
//     let real_result = []
//     for (let [key,value] of result){
//         real_result.push(...key)
//     }
        
//     return real_result
// }

function solution(genres, plays) {
    const genreMap = new Map();
    
    // Step 1: 각 장르별로 노래 정보를 묶어서 저장
    for (let i = 0; i < genres.length; i++) {
        const genre = genres[i];
        const playCount = plays[i];
        
        if (!genreMap.has(genre)) {
            genreMap.set(genre, []);
        }
        
        genreMap.get(genre).push({ index: i, playCount });
    }
    
    // Step 2: 장르별로 총 재생 횟수 계산
    const totalPlayCounts = new Map();
    for (const [genre, songs] of genreMap) {
        const totalPlayCount = songs.reduce((acc, cur) => acc + cur.playCount, 0);
        totalPlayCounts.set(genre, totalPlayCount);
    }
    
    // Step 3: 장르별 총 재생 횟수에 따라 장르를 정렬
    const sortedGenres = Array.from(totalPlayCounts.keys()).sort((a, b) => totalPlayCounts.get(b) - totalPlayCounts.get(a));
    
    // Step 4: 각 장르 내에서 노래들을 정렬하고, 상위 두 곡 선택
    const result = [];
    for (const genre of sortedGenres) {
        const songs = genreMap.get(genre);
        songs.sort((a, b) => {
            if (a.playCount !== b.playCount) {
                return b.playCount - a.playCount;
            } else {
                return a.index - b.index; // 인덱스가 작은 순서대로 정렬
            }
        });
        
        // 상위 두 곡 선택
        const selectedSongs = songs.slice(0, 2).map(song => song.index);
        result.push(...selectedSongs);
    }
    
    return result;
}
