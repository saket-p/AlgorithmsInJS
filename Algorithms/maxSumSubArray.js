/**
 * 
 * Kadane's algorithm
 */

const maxSumSubArray = function(nums) {
    let currSum = nums[0];
    let maxSum = nums[0];

    for(let i = 1; i < nums.length; i++) {
        //Keep reseting currentSum to currentElement, if it falls below 0;
        currSum = currSum > 0 ? currSum + nums[i] : nums[i]; // or Math.max(currSum + nums[i], nums[i]);
        maxSum = currSum > maxSum ? currSum : maxSum; // or Math.max(currSum, maxSum);
    }
    return maxSum;
}

console.log(maxSumSubArray([-2,-4,1,-3,4,-1,2,1,-5,4]));
