function solution(array) {
    let answer = [];
    
    const maxNumber = Math.max(...array); 
    const maxIndex = array.indexOf(maxNumber); 
    
    answer.push(maxNumber)
    answer.push(maxIndex)

    
    return answer;
}