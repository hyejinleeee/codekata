function solution(arr) {
    let answer = [];

    if(arr.length === 0){ return [-1]}
    if(arr.length === 1){ return [-1]}
    
    const minValue = Math.min(...arr);
    
    for(let num of arr){
        if(num !== minValue){
            answer.push(num)
        }
    }
    
    return answer;
}