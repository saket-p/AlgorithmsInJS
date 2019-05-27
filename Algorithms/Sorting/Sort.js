import { getRandomNumArray, timed } from '../../Utils/utils.js';
import { selectionSort } from './selectionSort.js';
import { bubbleSort } from './bubbleSort.js';
import { mergeSort } from './mergeSort.js';

const arrLen = 20;

export default class Sort {
    constructor(arr) {
        this.arr = arr;
    }

    selection() {
        timed(selectionSort)(this.arr);
    }

    bubble() {
        timed(bubbleSort)(this.arr);
    }

    mergeSort() {
        timed(mergeSort)(this.arr);
    }
}
export function runSortTests(arr = []) {
    console.log('Running sort tests\n');
    arr = arr.length === 0 ? getRandomNumArray(arrLen) : [...arr];

    const s = new Sort(arr);

    s.selection();
    s.bubble();
    s.mergeSort();
}
