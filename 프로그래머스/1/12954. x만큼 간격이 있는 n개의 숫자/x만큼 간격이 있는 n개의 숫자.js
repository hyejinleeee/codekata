function solution(x, n) {
    let answer = [];
    let sum = 0
    for(i=1; i<=n; i++){
        sum = sum + x
        answer.push(sum)
    }
    
    return answer;
}