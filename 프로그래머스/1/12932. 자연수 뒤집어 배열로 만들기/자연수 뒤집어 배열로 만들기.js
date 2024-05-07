function solution(n) {
    let answer = [];
    let digitCount = String(n).length;
    n = n + ''
    for(let i = 0; i< digitCount; i++){
    answer.unshift(+n[i])
     }    return answer;
}