class Node {
  constructor(val) {
    this.val = val;
    this.left = null;
    this.right = null;
  }
}

class Tree {
  constructor() {
    this.root = null;
  }

  inOrderTraversal(node) {
    // Implementation for in-order traversal can be added here
    if (node === null) {
      return;
    }
    this.inOrderTraversal(node.left);
    console.log(`Node value is: ${node.val}`);
    this.inOrderTraversal(node.right);
  }

  levelOrderTraversal(node) {
    if (node === null) {
      return;
    }
    let queue = [];
    queue.push(node);
    

    while (queue.length > 0) {
      let size = queue.length;
      while (size-- > 0) {
        let currNode = queue.shift();

        console.log(`Node value is: ${currNode.val}`);
        if (currNode.left !== null) {
          queue.push(currNode.left);
        }
        if (currNode.right !== null) {
          queue.push(currNode.right);
        }
      }
    }
  }

  createTree(arr) {
    this.root = this._createTree(arr, 0, arr.length - 1);
    return this;
  }

  _createTree(arr, l, r) {
    if (arr.length === 0 || l > r) {
      return null;
    }
    let mid = Math.floor(l + (r - l) / 2);
    let node = new Node(arr[mid]);
    node.left = this._createTree(arr, l, mid - 1);
    node.right = this._createTree(arr, mid + 1, r);
    return node;
  }

  getRootVal() {
    return this.root ? this.root.val : null;
  }
}

module.exports = Tree;
