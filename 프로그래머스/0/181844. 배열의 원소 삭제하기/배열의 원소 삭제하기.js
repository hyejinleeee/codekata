function solution(arr, delete_list) {
    let answer = arr.filter(num => !delete_list.includes(num));
    return answer;
}
