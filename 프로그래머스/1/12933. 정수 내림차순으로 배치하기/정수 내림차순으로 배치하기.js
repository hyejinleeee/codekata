function solution(n) {
    let digits = String(n).split('');
    
     digits.sort(function(a, b) {
        return b - a;
    });
    
    let sortedNumber = parseInt(digits.join(''));
    
    return sortedNumber;
}