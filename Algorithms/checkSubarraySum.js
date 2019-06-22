/* https://practice.geeksforgeeks.org/problems/subarray-with-given-sum/0 */

const checkSubarraySum = function(nums, k) {
    let sum = 0;
    let start = 0;
    const len = nums.length;
    for(let i = 0; i < len; i++) {
        if(sum === k)
            return [start + 1, i];
        sum += nums[i];
        while(sum > k && start <= i) {
            sum -= nums[start];
            start++
        }
    }
    return -1;
};

console.log(checkSubarraySum("1 2 3 4 5 6 7 8 9 10".split(' ').map(elem => parseInt(elem)), 15));