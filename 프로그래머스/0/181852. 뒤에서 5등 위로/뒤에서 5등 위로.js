function solution(num_list) {
    let sortedNumList = num_list.sort((a, b) => a - b);
    let answer = sortedNumList.slice(5)
    
    return answer;
}