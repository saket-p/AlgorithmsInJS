/**
 * 
To solve this in O(N) time, we can keep two indices – one in the beginning (start) and the other in the end (end). 
If the sum of the current two numbers is greater than S, we move the end pointer backward by one step. 
If the sum is smaller than S, we move the start pointer forward by one step.
When the two pointers meet each other, we know that no two numbers sum up to S
 */
const twoSumSorted = function(nums, target) {
    let start = 0;
    let end = nums.length - 1;
    let res = [];
    while(start < end) {
        if(nums[start] + nums[end] > target) {
            end--;
        } else if (nums[start] + nums[end] < target) {
            start++;
        } else {
            res = Array.of(start, end);
            break;
        }
    }

    return res;
}

console.log(twoSumSorted([2,7,11,15], 13));