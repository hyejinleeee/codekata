function solution(num_str) {
    
    let answer = 0;
    
    for(let num of num_str){
        answer += +num
    }
    
    return answer;
}