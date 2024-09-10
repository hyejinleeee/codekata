function solution(a, b) {
    const strA = a + ''
    const strB = b + ''
    
    const sumAB = strA + strB
    const sumBA = strB + strA
     
    if(sumAB === sumBA) {
        return +sumAB
    }
    const answer = (sumAB > sumBA) ? sumAB : sumBA
    return +answer;
}