/**
 * Given a string, find the length of the longest substring without repeating characters.
 * 
 * @param {string} str 
 */
const lengthOfLongestUniqueSubstring = function (str) {
    let s = 0;
    let len = str.length;
    let map = {};
    let maxLen = 0;
    for(let e = 0; e < len; e++) {
        //Check: If duplicate is found 'on' or 'after' start index i.e 's'
        //Note: we do not care if duplicates are found before start index
        if(typeof map[str.charAt(e)] != "undefined" && map[str.charAt(e)] >= s) {
            s = map[str.charAt(e)] + 1;
        }
        map[str.charAt(e)] = e;
        let currLen = e - s + 1;
        maxLen = Math.max(currLen, maxLen);
    }
    return maxLen;
}

console.log(lengthOfLongestUniqueSubstring(""));
console.log(lengthOfLongestUniqueSubstring(" "));
console.log(lengthOfLongestUniqueSubstring("bbbbbbbbb"));
console.log(lengthOfLongestUniqueSubstring("dfdv"));
console.log(lengthOfLongestUniqueSubstring("pwwkew"));
console.log(lengthOfLongestUniqueSubstring("abba"));
console.log(lengthOfLongestUniqueSubstring("abcabcbb"));