function solution(my_string, letter) {
   let answer = '';
    
    for(let str of my_string){
        if(str !== letter){
            answer += str
        }
    }
    
    return answer;
}