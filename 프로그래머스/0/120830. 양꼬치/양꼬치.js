function solution(n, k) {
    
    let lambsSkewer = 12000;
    let drink = 2000;
    
    let drinkOnTheHouse = Math.floor(n / 10);
    
    let sum = (lambsSkewer * n) + (drink * (k-drinkOnTheHouse))
    
    let answer = sum;
    return answer;
}