/**
* Represents the BinaryTree
* @constructor
*/
function BinaryTree() {
    this.root = null;
}
/**
* Represents the Node Object
* @constructor
*/
function Node(data) {
    this.data = data;
    this.left = null;
    this.right = null;
}
/**
* Adding methods to BinaryTree prototype
*/

BinaryTree.prototype = {
    /**
     * insert function
     * @param {Number} data -Data into the method
     */
    insert: function(data) {
        //var root = this.root;
        var node = new Node(data);
        //console.log(data);
        if (this.root === null) {
            this.root = node;
            console.log(this.root.data + " *****----");
        } else {
            current = this.root;
            while (current) {
                if (data < current.data) {
                    if (current.left === null) {
                        current.left = node;
                        console.log("left" + current.left.data + "-----");
                        break;
                    } else {
                        current = current.left;
                    }
                } else {
                    if (data > current.data) {
                        if (current.right == null) {
                            current.right = node;
                            console.log("right" + current.right.data + "-----");
                            break;
                        } else {
                            current = current.right;
                        }
                    }
                }
            }
        }
    },
    /**
     * inorderTraversal function to traverse through the tree
     * @param {Node} Represents a Node
     */
    inorderTraversal: function(node) {
        if (node) {
            this.inorderTraversal(node.left);
            console.log(node.data);
            this.inorderTraversal(node.right);
        }
    },
    /**
     * preOrderTraversal function to traverse through the tree
     * @param {Node} Represents a Node
     */
    preOrderTraversal: function(node) {
        if (node) {
            console.log(node.data);
            this.preOrderTraversal(node.left);
            this.preOrderTraversal(node.right);
        }
    },
    /**
     * postOrderTraversal function to traverse through the tree
     * @param {Node} Represents a Node
     */
    postOrderTraversal: function(node) {
        if (node) {
            this.postOrderTraversal(node.left);
            this.postOrderTraversal(node.right);
            console.log(node.data);
        }
    },
    /**
     * searchValueinTree function to searchValueinTree
     * @param {Node} node
     * @param {Number} key
     */
    searchValueinTree: function(node, key) {
        if (node === null) {
            return false;
        } else if (node.data === key) {
            return true;
        } else if (key > node.data) {
            return this.searchValueinTree(node.right, key);
        } else if (key < node.data) {
            return this.searchValueinTree(node.left, key);
        }
    },
    /**
     * minValueInTree function to FindMinimum in tree
     * @param {Node} node - The Node Object
     */
    minValueInTree: function(node) {
        if (node === null) {
            return 0;
        } else if (node.left) {
            return this.minValueInTree(node.left);
        }
        return node.data;
    },
    /**
     * deleteValueInTree function to delete value
     * @param {Node} node - The Node Object
     * @param {Number} value - The value to be deleted
     */
    deleteValueInTree: function(node, value) {
        if (node === null) {
            return node;
        } else if (value > node.data) {
            node.right = this.deleteValueInTree(node.right, value);
        } else if (value < node.data) {
            node.left = this.deleteValueInTree(node.left, value);
        } else {
            if (node.left == null && node.right == null) {
                node = null;
            } else if (node.left == null) {
                var temp = node;
                node = node.right;
                temp = null;
            } else if (node.right == null) {
                var temp = node;
                node = node.left;
                temp = null;
            } else {
                var temp = this.minValueInTree(node.right);
                node.data = temp;
                node.right = this.deleteValueInTree(node.right, temp);
            }
        }
        return node;
    },
    /**
     * Function for finding maximum value in the tree
     * @param {Node} node - Represents a node Object Entire tree
     */
    maxValueInTree: function(node) {
        if (node === null) {
            return 0;
        } else if (node.right) {
            return this.maxValueInTree(node.right);
        }
        return node.data;
    }
}
/**
Creating instanceof BinaryTree
*/
var bt = new BinaryTree();
bt.insert(40);
bt.insert(20);
bt.insert(10);
bt.insert(30);
bt.insert(60);
bt.insert(50);
bt.insert(70);
bt.insert(45);
bt.insert(15);
bt.insert(18);
bt.insert(12);
//inorderTraversal(bt.root);
console.log(bt.root);
console.log("inOrder Traversal");
bt.inorderTraversal(bt.root);
console.log("post order traversal");
bt.postOrderTraversal(bt.root);
console.log("pre Order traversal");
bt.preOrderTraversal(bt.root);
console.log("minimum  value");
var min = bt.minValueInTree(bt.root);
//console.log('HI');
//inorderTraversal(bt.root);
console.log(min);
console.log("maximum value");
var max = bt.maxValueInTree(bt.root);
console.log(max);
console.log("searching in the tree");
var found = bt.searchValueinTree(bt.root, 100);
console.log(found);
var node1 = bt.deleteValueInTree(bt.root, 10);
console.log("inOrder Traversal");
bt.inorderTraversal(node1);
console.log("post order traversal");
bt.postOrderTraversal(node1);
console.log("pre Order traversal");
bt.preOrderTraversal(node1);
