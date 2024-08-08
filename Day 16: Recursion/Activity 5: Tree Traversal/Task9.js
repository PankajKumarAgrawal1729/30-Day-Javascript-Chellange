const Tree = require("./Tree");

let arr = [1, 2, 3, 4, 5, 6, 7];

let tree = new Tree();
tree.createTree(arr);
console.log(tree.getRootVal()); // Output: 5
tree.inOrderTraversal(tree.root);
console.log("Done");

