export const findXLinear = (arr, x) => {
    console.log("findXLinear :: x = " + x);
    let i = arr.length;
    while( i-- && arr[i] != x);
    return i;
}