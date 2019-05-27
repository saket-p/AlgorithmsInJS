import { mergeSortedArray } from './mergeSortedArray.js';
import { getRandomNumArray, } from '../../Utils/utils.js';

function mergeSortNow(arr, l, r) {
    if(l == r) {
        //return single element array
        return [arr[l]];
    }
    // Same as (l+r)/2, but avoids overflow for large l and r
    const m = l + Math.floor((r - l) / 2);
    return mergeSortedArray(
        mergeSortNow(arr, l, m),
        mergeSortNow(arr, m + 1, r)
    );
}

export const mergeSort = (arr) => {
    console.log("mergeSort :");
    return mergeSortNow(arr, 0, arr.length - 1);
}

/* console.log('Output: ' + mergeSort(getRandomNumArray(100))); */