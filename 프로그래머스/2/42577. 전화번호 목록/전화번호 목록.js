function solution(phone_book) {
    // 첫번째 방법.. 효율성 테스트.. 2개 실패;;
    // // 숫자가 작은순부터 오름차순으로 나열될 수 있도록 정렬
    // const sortedPb = phone_book.sort()
    // for (let i=0; i<sortedPb.length; i++){
    //     for (let j=i+1; j<sortedPb.length; j++){
    //         // 이중으로 순회하면서 해당 번호로 시작하는게 있는지 앞에서부터 확인
    //         if(sortedPb[j].startsWith(sortedPb[i])){
    //             // sortedPb[i] 값으로 시작하는 단어라면 바로 false 리턴
    //             return false
    //         }
    //     }
    // }
    // return true
    
    // ------------------------------------
    
    // 두번째 방법..
    // 숫자가 작은순부터 오름차순으로 나열될 수 있도록 정렬
    const sortedPb = phone_book.sort()
    // 이중순회 하지말고 바로 옆이랑만 비교
    for (let i=0; i<sortedPb.length; i++){
        if(sortedPb[i+1] && sortedPb[i+1].startsWith(sortedPb[i])){
            return false;
        }
    }
    return true;
}

