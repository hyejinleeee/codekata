function isPrime(num) {
    if (num < 2) return false;
    for (let i = 2; i * i <= num; i++) {
        if (num % i === 0) return false;
    }
    return true;
}

function solution(n) {
    let compositeCount = 0;
    for (let i = 1; i <= n; i++) {
        if (!isPrime(i) && i !== 1) { // 소수가 아니고, 1이 아닐 때 (합성수)
            compositeCount++;
        }
    }
    return compositeCount;
}
