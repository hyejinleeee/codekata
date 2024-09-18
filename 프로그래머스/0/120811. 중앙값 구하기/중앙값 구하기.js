function solution(array) {
    let sortedArray = array.sort((a, b) => a - b);
    
    const middleIndex = Math.floor(array.length / 2);
    
    return sortedArray[middleIndex];
}
