function solution(n, k) {
    
    let answer = [];
    
    for(let i= 1; i <=n; i++){
        if(!(i%k)){
            answer.push(i)
        }
    }
    
    
    return answer;
}