function solution(n) {
    let answer = 0;
    let numToStr = n + ''
    
    for(let num of numToStr){
        answer += +num
    }
    
    return answer;
}