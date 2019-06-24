const numberedPrint = ((number) => (str) => console.log(`${++number}: ${str}`))(0);

const permute = function (arr, pos) {
    if(pos === arr.length - 1) {
        numberedPrint(arr.join(''));
        return;
    }
    
    for(let i = pos; i < arr.length; i++) {
        [arr[pos], arr[i]] = [arr[i], arr[pos]];
        permute(arr, pos + 1);
        [arr[pos], arr[i]] = [arr[i], arr[pos]];
    }
}
const allPermutations = function(str) {
    permute(Array.from(str), 0);
}

allPermutations("ABC");


