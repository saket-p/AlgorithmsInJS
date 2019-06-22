export const validParentheses = function(s) {
    const len = s.length;
    const paraMap = {'(': ')', '{': '}', '[': ']'};
    const tStack = [];
    for(let i = 0; i < len; i++){
        let c = s.charAt(i);
        if(tStack.length === 0) {
          tStack.push(c);
          continue;
        }
        let top = tStack[tStack.length - 1];
        if(c === paraMap[top]) {
          tStack.pop();
          continue;
        }
        tStack.push(c);
    }
    return !tStack.length;
};

/* console.log(validParentheses("(])")); */