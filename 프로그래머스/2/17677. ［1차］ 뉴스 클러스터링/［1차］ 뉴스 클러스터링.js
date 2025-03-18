function solution(str1, str2) {
    
    /**
    자카드 유사도 = 두 집합의 교집합 크기 / 두 집합의 합집합의 크기
    두 집합이 모두 공집합인 경우 1로 정의
    
    문자의 경우 2글자씩 끊어서 다중집합 생성
    영문자로 된 글자 쌍만 유효
    공백, 숫자, 특수문자가 포함되면 버림
    대문자와 소문자는 같은 원소로 취급
    
    유사도값 * 65536 을 곱한 후 정수부만 출력
    */
    
    const makeMulti = (str)=>{
        
        let arr = []
        for(let i=0; i<str.length; i++){
            // 앞과 뒤를 묶어서 2글자씩 생성
            if(/^[A-Za-z]$/.test(str[i]) && /^[A-Za-z]$/.test(str[i+1])){
                // 값이 영문자일때만 유효하게 설정
                const word = str[i].toUpperCase() +str[i+1].toUpperCase()
                // 만든 단어 추가
                arr.push(word)   
            }
        }
        return arr
    }
    
    const zip1 = makeMulti(str1)
    const zip2 = makeMulti(str2)
    
    // 두 집합이 모두 공집합이면 1로 리턴
    if(zip1.length === 0 && zip2.length === 0){
        return 1*65536
    }
    
    // 공집합 아닐 때 
    // 요소별 등장 횟수 카운트
    const getCountMap = (arr) => {
        const map = new Map();
        for (const el of arr) {
            map.set(el, (map.get(el) || 0) + 1);
        }
        return map;
    };

    const map1 = getCountMap(zip1);
    const map2 = getCountMap(zip2);

    let intersection = 0; // 교집합 개수
    let union = 0; // 합집합 개수

    const allKeys = new Set([...map1.keys(), ...map2.keys()]);
    
    allKeys.forEach((key) => {
        const count1 = map1.get(key) || 0;
        const count2 = map2.get(key) || 0;

        intersection += Math.min(count1, count2); // 교집합: 최소 개수만큼 포함
        union += Math.max(count1, count2); // 합집합: 최대 개수만큼 포함
    });

    return parseInt((intersection / union) * 65536);
}