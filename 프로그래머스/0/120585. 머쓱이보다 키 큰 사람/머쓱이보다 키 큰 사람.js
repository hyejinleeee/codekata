function solution(array, height) {
    let answer = 0;
    
    for(let h of array){
        if(h > height){
            answer += 1
        }
    }
    
    return answer;
}