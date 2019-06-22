/**
 * Given an input string, reverse the string word by word.
 * reversed string should not contain leading or trailing spaces.
 * You need to reduce multiple spaces between two words to a single space in the reversed string
 * 
 * @param {string} s 
 */
const reverseWords = function(s) {
    const strArr = s.split(' ');
    let len = strArr.length;
    const arr = [];
    for(let i = len - 1; i >= 0 ; i--){
        if(strArr[i]){
            arr.push(strArr[i]);
        }
    }
    return arr.join(' ');
};

console.log(reverseWords("  hello      world!  "));