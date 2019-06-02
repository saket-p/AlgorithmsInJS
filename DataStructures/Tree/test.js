import BinaryTree from './BinaryTree.js';
import * as u from './utils.js';

export const runTreeTests = () => {
    const bTree1 = new BinaryTree(u.fromLevelOrderArrayRecursive([1,2,3,4,5,6,7,8,9,10,11,12,13,14,15]));
    const bTree2 = new BinaryTree(u.fromLevelOrderArrayRecursive([1,2,3,'.','.',4,5,'.','.','.','.',6,'.','.','.']));
    
    console.log(u.levelOrderTraversal(bTree1.root).toString());
    console.log(u.getHeight(bTree1.root));
    u.print2D(bTree1.root);
    console.log(u.getNodesOnLevel(3, bTree1.root));

    console.log("\n\n");

    console.log(u.levelOrderTraversal(bTree2.root).toString());
    console.log(u.getHeight(bTree2.root));
    u.print2D(bTree2.root);
    console.log(u.getNodesOnLevel(3, bTree2.root));
}

runTreeTests();