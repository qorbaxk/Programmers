function solution(arr){
    // 기본값으로 첫번째 인덱스에 있는 값을 넣어둠
    const result = [arr[0]]
    // 배열 순회를 진행
    arr.forEach((v)=>{
        // 가장 마지막으로 추가한 값
        const last = result[result.length-1]
        // 마지막으로 추가한 값이 현재의 값과 다를 때만 추가함
        if(v !== last){
            result.push(v)
        }
    })
    return result
}