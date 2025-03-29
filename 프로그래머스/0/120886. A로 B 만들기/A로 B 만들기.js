function solution(before, after) {
    const sortStr = str => str.split('').sort().join('');
    return sortStr(before) === sortStr(after) ? 1 : 0;
}
