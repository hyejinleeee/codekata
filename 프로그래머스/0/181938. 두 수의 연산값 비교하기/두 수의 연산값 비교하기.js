function solution(a, b) {
    const sumAB = Number(String(a) + String(b));
    const multiflyAB2 = 2 * a * b;
    
    if(sumAB === multiflyAB2){
        return sumAB
    }
    
    const answer = (sumAB > multiflyAB2) ? sumAB : multiflyAB2
    return answer;
}