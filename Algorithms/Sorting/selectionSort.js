export function selectionSort(arr) {
    console.log("selectionSort :");
    arr = [...arr];
    const len = arr.length;
    for(let i = 0; i < len - 1; i++) {
        let minInd = i;
        for(let j = i + 1; j < len; j++) {
            minInd = arr[j] < arr[minInd] ? j : minInd;
        }
        if(minInd !== i) {
            [arr[minInd], arr[i]] = [arr[i], arr[minInd]];
        }
    }
    return arr;
}