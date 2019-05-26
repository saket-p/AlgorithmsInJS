export const findXBinary = (arr, x) => {
    console.log("findXBinary :: x = " + x);
    let l = 0;
    let r = arr.length - 1;
    while(l <= r) {
        let m = l + Math.floor((r - l) / 2); //Same as (l+r)/2 but avoids overflow for large l & r

        if(arr[l] === x) return l;
        if(arr[m] === x) return m;
        if(arr[r] === x) return r;

        if(arr[m] < x) l = m + 1;
        else r = m - 1;
    }
    return -1;
}
