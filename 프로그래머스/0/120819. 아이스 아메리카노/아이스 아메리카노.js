function solution(money) {
    let answer = [];
    
    let numOfAmericano =Math.floor(money / 5500);
    let exchange = money % 5500;
    
    answer.push(numOfAmericano);
    answer.push(exchange);
    
    return answer;
}