function solution(storey) {
    
    // 마법의 돌 소모량
    let stone = 0;

    // 이동
    const move = (number) => {
        console.log(number)
        // 0층에 오면 멈춤
        if (number === 0) return;

        // 10으로 나눠서 남는 나머지 확인
        const n = number % 10;
        
        // 5 미만일때는 
        if (n < 5) {
            // -1 버튼 써야되니까 추가
            stone += n;
            // 나머지 뺀 몫만 다음으로 전달
            move(Math.floor(number / 10));
        } else if (n > 5) {
            // 5 초과일 때는 +1 버튼 써야되니까 추가
            stone += 10 - n;
            // 올림처리했으니까 몫에 +1 더해서 전달
            move(Math.floor(number / 10) + 1);
        } else {
            // 5 일때는 다음 자릿수도 확인
            const next = Math.floor(number / 10) % 10;
            // 5 이상이면 올림처리
            if (next >= 5) {
                stone += 10 - n;
                move(Math.floor(number / 10) + 1);
            } else {
                // 미만이면
                stone += n;
                move(Math.floor(number / 10));
            }
        }
    };

    move(storey);
    return stone;
}