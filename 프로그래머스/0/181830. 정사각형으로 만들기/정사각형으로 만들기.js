function solution(arr) {
    const rowCount = arr.length;
    const colCount = arr[0].length;

    // case 1: 행 > 열 → 각 행에 0 추가
    if (rowCount > colCount) {
        const diff = rowCount - colCount;
        return arr.map(row => [...row, ...Array(diff).fill(0)]);
    }

    // case 2: 열 > 행 → 행 자체를 아래로 0으로 채운 배열 추가
    if (colCount > rowCount) {
        const diff = colCount - rowCount;
        const newRows = Array.from({ length: diff }, () => Array(colCount).fill(0));
        return [...arr, ...newRows];
    }

    // case 3: 정방형이면 그대로 반환
    return arr;
}
