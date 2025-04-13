function solution(arr, queries) {
    for (let [i, j] of queries) {
        // 배열의 값 서로 교환
        [arr[i], arr[j]] = [arr[j], arr[i]];
    }
    return arr;
}
