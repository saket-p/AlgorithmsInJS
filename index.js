import { runSearchTests } from './Algorithms/Searching/Search.js';
import { runSortTests } from './Algorithms/Sorting/Sort.js';

export default function run() {
    runSearchTests([1,2,3,4,5,6], 4);
    runSearchTests();

    runSortTests([2,5,78,23,89,0,3,7,100]);
    runSortTests();
}

run();