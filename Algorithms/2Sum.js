const twoSums = function(nums, target) {
    const map = {};
    let res = [];
    nums.forEach((el, ind) => {
        if(map.hasOwnProperty(el)) {
             res = Array.of(map[el], ind)
        } else {
            map[target - el] = ind;
        }
    });
    return res;
}

console.log(twoSums([2,7,11,15], 9));