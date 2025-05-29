function solution(arr, k) {
    const result = [];

    for (let num of arr) {
        if (!result.includes(num)) {
            result.push(num);
        }
        if (result.length === k) break;
    }

    // 길이 k보다 부족하면 -1로 채우기
    while (result.length < k) {
        result.push(-1);
    }

    return result;
}
