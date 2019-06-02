import Node from './Node.js';

export const fromLevelOrderArrayRecursive = arr => {
    const arrLen = arr.length;
    if(!arrLen) {
        return;
    }
    return _lvlOrder(arr, 0);
}

function _lvlOrder(arr, i){
    if(!arr[i] || arr[i] === '.') {
        return null;
    }
    const node = new Node(arr[i]);
    node.left = _lvlOrder(arr, 2 * i + 1);
    node.right = _lvlOrder(arr, 2 * i + 2);
    return node;
}

export const fromLevelOrderArray = arr => {
    const arrLen = arr.length;
    if(!arrLen) {
        return;
    }
    const nodeArr = [];
    let root;
    const nonLeafNodelen = Math.floor((arrLen - 1) / 2) + Math.ceil((arrLen - 1) % 2);
    for(let i = 0; i < nonLeafNodelen; i++) {
        if(arr[i] === '.') {
            // Indicates null value
            continue;
        }
        let node = nodeArr[i] || new Node(arr[i]);
        if(!nodeArr[i]){
            nodeArr[i] = node;
        }
        if(i === 0) {
            root = node;
        }
        if(arr[2 * i + 1] && arr[2 * i + 1] !== '.'){
            node.left = new Node(arr[2 * i + 1]);
            nodeArr[2 * i + 1] = node.left;
        }
        if(arr[2 * i + 2] && arr[2 * i + 2] !== '.'){
            node.right = new Node(arr[2 * i + 2]);
            nodeArr[2 * i + 2] = node.right;
        }
    }
    return root;
};


export const getHeight = root => {
    if(!root) {
        return 0;
    }
    return _heightFn(root);
};

function _heightFn(node){
    if(node === null){
        return 0;
    }
    return 1 + Math.max(_heightFn(node.left), _heightFn(node.right));
}

export const levelOrderTraversal = root => {
    if(!root) {
        return 'Empty tree';
    }
    const queue = [root];
    const nodeValues = [];
    while(queue.length) {
        let n = queue.shift();
        nodeValues.push(n.value);
        if(n.left !== null) queue.push(n.left);
        if(n.right !== null) queue.push(n.right);
    }
    return nodeValues;
}

export const print2D = root => {
    if(!root) {
        return 0;
    }
    const h = getHeight(root);
    const w = Math.pow(2, h) - 1;
    const arr = []; //2D array of size h x w , where w = (2^h)-1
    for(let i = 0; i < h; i++) {
        arr[i] = [];
        for(let j = 0; j < w; j++){
            arr[i][j] = '  ';
        }
    }

    /* 
        Max number of leaf node on a level h = 2^(h-1) e.g. (h=4, ans = 2^(4-1) = 8)
        Now we want to give padding of one cell in leaf node row (so, that we can accomodate parent node in 
        exactly middle of child node). 
        Therefore total number of cells in bottommost row = 2^h - 1 e.g. (h=4, ans = 15)
        Now, length of bottommost row  = width of 2D array = 2^h -1
        So root node will located in exactly middle column in topmost ( = 0th) row. 
        And middle column = width of 2D array / 2 = Math.floor((2^h - 1) / 2) = 2^(h - 1) -1
        i.e. root node co-ordinate in 2D array = (0 , 2^(h - 1) -1),
        from there we can recursively substract(for left) and add (for right) the offset(as computed above)
        and plot child nodes in 2D array too.
    */
    _populate2D(root, arr, 0, Math.pow(2, h - 1) - 1, h);

    arr.forEach(row => {
        console.log(row.join('') + "\n");
    });
}

function _populate2D(node, arr, row, col, h) {
    if(!node){
        return;
    }
    arr[row][col] = node.value;
    let childOffset = Math.pow(2, h - row - 2);
    _populate2D(node.left, arr, row + 1, col - childOffset, h);
    _populate2D(node.right, arr, row + 1, col + childOffset, h);
}

export const getNodesOnLevel = (lvl, root) => {
    if(!root) {
        return [];
    }

    const bag = [];
    _collectNodesOnALevel(root, bag, 1, lvl);
    return bag;
}

function _collectNodesOnALevel(node, bag, currLvl, givenLvl) {
    if(!node) {
        return;
    }

    if(givenLvl == currLvl) {
        bag.push(node.value);
        return;
    }

    _collectNodesOnALevel(node.left, bag, currLvl + 1, givenLvl);
    _collectNodesOnALevel(node.right, bag, currLvl + 1, givenLvl);
}