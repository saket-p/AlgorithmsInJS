import Node from './Node.js';

export default class BinaryTree {
    constructor(root = null) {
        this.root = root;
    }

    fromLevelOrderArrayRecursive(arr) {
        const arrLen = arr.length;
        this.root = null;
        if(!arrLen) {
            return;
        }

        function lvlOrder(arr, i){
            if(!arr[i] || arr[i] === '.') {
                return null;
            }
            const node = new Node(arr[i]);
            node.left = lvlOrder(arr, 2 * i + 1);
            node.right = lvlOrder(arr, 2 * i + 2);
            return node;
        }

        const root = lvlOrder(arr, 0);
        this.root = root;
        return root;
    }

    fromLevelOrderArray(arr){
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
        this.root = root;
        return root;
    }

    getHeight(r = null) {
        let root = r || this.root;
        if(!root) {
            return 0;
        }

        function heightFn(node){
            if(node === null){
                return 0;
            }
            return 1 + Math.max(heightFn(node.left), heightFn(node.right));
        }
        return heightFn(root);
    }

    levelOrderTraversal(r = null) {
        let root = r || this.root;
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

    print2D(r = null) {
        let root = r || this.root;
        if(!root) {
            return 0;
        }
        const h = this.getHeight(root);
        const w = Math.pow(2, h) - 1;
        const arr = []; //2D array of size h x w , where w = (2^h)-1
        for(let i = 0; i < h; i++) {
            arr[i] = [];
            for(let j = 0; j < w; j++){
                arr[i][j] = '  ';
            }
        }

        function populate2D(node, arr, row, col, h) {
            if(!node){
                return;
            }
            arr[row][col] = node.value;
            let childOffset = Math.pow(2, h - row - 2);
            populate2D(node.left, arr, row + 1, col - childOffset, h);
            populate2D(node.right, arr, row + 1, col + childOffset, h);
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
        populate2D(root, arr, 0, Math.pow(2, h - 1) - 1, h);

        arr.forEach(row => {
            console.log(row.join('') + "\n");
        });
    }

    getNodesOnLevel(lvl, r = null) {
        let root = r || this.root;
        if(!root) {
            return [];
        }
    
        function collectNodesOnALevel(node, bag, currLvl, givenLvl) {
            if(!node) {
                return;
            }

            if(givenLvl == currLvl) {
                bag.push(node.value);
                return;
            }

            collectNodesOnALevel(node.left, bag, currLvl + 1, givenLvl);
            collectNodesOnALevel(node.right, bag, currLvl + 1, givenLvl);
        }

        const bag = [];
        collectNodesOnALevel(root, bag, 1, lvl);
        return bag;
    }
}

const bTree = new BinaryTree();
// bTree.fromLevelOrderArrayRecursive([1,2,3,'.','.',4,5,'.','.','.','.',6,'.','.','.']);
bTree.fromLevelOrderArrayRecursive([1,2,3,4,5,6,7,8,9,10,11,12,13,14,15]);
// /* console.log(bTree.levelOrderTraversal().toString());
// console.log(bTree.getHeight()); */
bTree.print2D();
console.log(bTree.getNodesOnLevel(0));