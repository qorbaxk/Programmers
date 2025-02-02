function solution(nums) {
    // 폰켓몬의 갯수: 항상 짝수
    const N = nums.length
    // 가져갈 수 있는 최대 폰켓몬의 개수
    const pickNum = N/2
    // 중복을 제거한 폰켓몬의 배열
    const noDup = new Set([...nums])
    // 중복을 제거한 상태에서 고를 수 있는 최대 개수
    const noDupSize = noDup.size
    // 최솟값으로 맞추기
    return Math.min(pickNum, noDupSize)
}