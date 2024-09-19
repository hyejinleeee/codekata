function solution(my_string) {
    let answer = 0;

    for (let str of my_string) {
   
        if (!isNaN(str)) { 
            answer += +str; 
        }
    }

    return answer;
}
