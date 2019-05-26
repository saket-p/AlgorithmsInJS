import { getRandomNumInRange, getRandomNumArray, timed } from '../../Utils/utils.js';
import { findXLinear } from './findXLinear.js';
import { findXBinary } from './findXBinary.js';

const arrLen = 10;
const arrInd = getRandomNumInRange(0, arrLen - 1);

export default class Search {
    constructor(arr, x, isSorted) {
        this.arr = arr;
        this.x = x;
        this.isSorted = isSorted;
    }

    linear() {
        timed(findXLinear)(this.arr, this.x);
    }

    binary() {
        //create a new array to sort ([...arr]), because Array.prototype.sort does in place sorting
        const arr = !!this.isSorted ? this.arr : [...this.arr].sort((a, b) => a - b);
        timed(findXBinary)(arr, this.x);
    }
}

export function runSearchTests(arr = [], x, isSorted = false) {
    console.log('Running search tests\n');
    const _arr = arr.length === 0 ? getRandomNumArray(arrLen) : [...arr];
    console.log('Array : ', _arr);
    x = arr.length === 0 ? _arr[arrInd] : x;
    
    const search = new Search(_arr, x, isSorted);
    search.linear();
    search.binary();
}






