function solution(numbers) {
    var answer = 0;
    let sum = 0
    for(let k of numbers){
        sum = sum + k
        }
    answer = sum / numbers.length
    
    
    return answer;
}