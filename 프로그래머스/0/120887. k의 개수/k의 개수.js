function solution(i, j, k) {
    let str = '';
    for (let num = i; num <= j; num++) {
        str += num;
    }
    return str.split(k.toString()).length - 1;
}
