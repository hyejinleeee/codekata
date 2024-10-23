function solution(s1, s2) {
     
    let answer = 0;
    
    for(let str1 of s1){
       for(let str2 of s2){
           if(str1 === str2){
               answer += 1
           }
       }
    }
           
    
    return answer;
}