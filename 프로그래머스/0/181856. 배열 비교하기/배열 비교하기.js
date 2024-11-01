function solution(arr1, arr2) {
    const arr1Sum = arr1.reduce((acc, curr) => acc + curr, 0);
    const arr2Sum = arr2.reduce((acc, curr) => acc + curr, 0);

    if (arr1.length !== arr2.length) {
        return arr1.length > arr2.length ? 1 : -1;
    }

    if (arr1Sum === arr2Sum) {
        return 0;
    }
    
    return arr1Sum > arr2Sum ? 1 : -1;
}
