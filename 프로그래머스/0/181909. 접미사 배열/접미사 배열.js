function solution(my_string) {
    // 모든 접미사를 생성
    const suffixes = [];
    for (let i = 0; i < my_string.length; i++) {
        suffixes.push(my_string.slice(i));
    }
    
    // 사전순으로 정렬
    return suffixes.sort();
}