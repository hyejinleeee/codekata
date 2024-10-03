function solution(numbers) {

    let arr = [1,2,3,4,5,6,7,8,9]
    let arrSum = arr.reduce((acc, curr) => acc + curr, 0);
    let numsSum = 0;
        
    for(let num of numbers){
        numsSum += num
    }
    
    return arrSum - numsSum;
}