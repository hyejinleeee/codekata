function solution(my_string) {

    let answer = '';
    
    for(let str of my_string){
        if(str !== 'a' && str !=='e' && str !== 'i' && str !== 'o' && str !== 'u'){
            answer += str
        }
    }
    
    return answer;
}