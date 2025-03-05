function solution(str_list, ex) {
    
    var answer = '';
    
    for(let word of str_list){
        if(!word.includes(ex)){
            answer += word
        }
    }
    
    return answer;
}