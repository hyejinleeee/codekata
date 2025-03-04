function solution(strArr) {
    var answer = [];
    
    for(let word of strArr){
        if(!word.includes("ad")){
          answer.push(word)
        }
    }
    
    return answer;
}