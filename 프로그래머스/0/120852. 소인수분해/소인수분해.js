function solution(n) {
    const result = [];
    for (let i = 2; i <= n; i++) {
        if (n % i === 0) {
            while (n % i === 0) {
                n /= i;
            }
            result.push(i);
        }
    }
    return result;
}
