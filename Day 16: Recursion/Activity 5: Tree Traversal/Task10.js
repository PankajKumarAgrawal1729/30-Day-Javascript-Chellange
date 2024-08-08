const Tree = require("./Tree");

const arr = [25, 83, 31, 74, 98, 62, 87];
const tree = new Tree();
tree.createTree(arr);
console.log(tree.getRootVal());
tree.levelOrderTraversal(tree.root);