function solution(str1, str2) {
    let answer = ''; // 먼저 answer를 빈 문자열로 초기화

    for (let i = 0; i < str1.length; i++) {
        answer += str1[i]; // str1의 i번째 문자를 answer에 추가
        answer += str2[i]; // str2의 i번째 문자를 answer에 추가
    }

    return answer; // 최종적으로 answer 문자열 반환
}
