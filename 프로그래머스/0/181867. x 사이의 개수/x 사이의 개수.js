function solution(myString) {
    // "x"를 기준으로 문자열을 나눔
    const parts = myString.split('x');
    
    // 각 부분 문자열의 길이를 계산하여 배열에 저장
    const lengths = parts.map(part => part.length);
    
    return lengths;
}