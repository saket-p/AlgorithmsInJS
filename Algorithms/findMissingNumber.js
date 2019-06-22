/**
 * Given an array containing n distinct numbers taken from 0, 1, 2, ..., n, 
 * find the one that is missing from the array.
 * Assumption: serires starts from 0 i.e. smallest number is 0
 * Formula : (n/2)(2a + (n - 1)d) - sum of array. Here, a = 0 and d = 1, n = arr.length + 1
 */

const findMissingNumber = function (arr) {
    let n = arr.length + 1;
    return ((n / 2) * ( n - 1)) - arr.reduce((sum, elem) => {
        return sum + elem;
    }, 0);
}

console.log(findMissingNumber([9,6,4,2,3,5,7,0,1]));