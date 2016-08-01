/*
 * This is a JavaScript Scratchpad.
 * Enter some JavaScript, then Right Click or choose from the Execute Menu:
 * 1. Run to evaluate the selected text (Ctrl+R),
 * 2. Inspect to bring up an Object Inspector on the result (Ctrl+I), or,
 * 3. Display to insert the result in a comment after the selection. (Ctrl+L)
 */

function BinaryTree() {
  this.root = null;
}
function Node(data) {
  this.data = data;
  this.left = null;
  this.right = null;
}
BinaryTree.prototype = {
insert : function(data){
	//var root = this.root;
	var node = new Node(data);
    //console.log(data);
	if(this.root === null){
		this.root = node;
    console.log(this.root.data+"*****----");
	}
	else{
		current = this.root;
		while(current){
			if(data < current.data){
				if(current.left === null){
					current.left = node;
					console.log("left"+current.left.data+"-----");
					break;				
				}
				else{
					current = current.left; 				
				}		
			}
			else{
				if(data > current.data){
					if(current.right == null){
						current.right = node;
						console.log("right"+current.right.data+"-----");
						break;					
					}
					else{
						current = current.right;					
					}
				}
			}		
		}	
	}
},
  inorderTraversal : function(node){
	 if (node) {
     this.inorderTraversal(node.left);
     console.log(node.data);
     this.inorderTraversal(node.right);
  }
},
	postOrderTraversal : function(node){
	if(node){
		this.postOrderTraversal(node.left);
		this.postOrderTraversal(node.right);
		console.log(node.data);
	}
},
	preOrderTraversal : function(node){
	if(node){
		console.log(node.data);
		this.preOrderTraversal(node.left);
		this.preOrderTraversal(node.right);
	}
},
	searchValueinTree : function (node,key){
	if(node === null){
		return false;
	}
	else if(node.data === key){
		return true;
	}
	else if(node.data < key){
		return this.searchValueinTree(node.right,key);
	}
	else if(node.data > key){
		return this.searchValueinTree(node.left,key);
	}
},
	//minimum value in the node is last node in the left side
minValueInTree : function (node){
	if(node === null){
		return 0;
	}
	else if(node.left){
    return this.minValueInTree(node.left);
	}
	return node.data;
},
	deleteValueInTree : function (node,value){
	if(node === null){
		return node;
	}
	else if(value > node.data){
		node.right = this.deleteValueInTree(node.right,value);
	}
	else if(value < node.data){
		node.left = this.deleteValueInTree(node.left,value);
	}
	else{
		if(node.left == null && node.right == null){
			node = null;
		}
		else if(node.left == null){
			var temp = node;
			node = node.right;
			temp = null;
		}
		else if(node.right == null){
			var temp = node;
			node = node.right;
			temp = null;
		}
		else{
			var temp = minValueInTree(node.right);
			node.data = temp;
			node.right = deleteValueInTree(node.right,temp);
		}
	}
	return node;
	},
	 maxValueInTree : function(node){
	if(node === null){
		return 0;
	}
	else if(node.right){
		return this.maxValueInTree(node.right);
	}
	return node.data;
}
}
var bt = new BinaryTree();
bt.insert(40);
bt.insert(20);
bt.insert(10);
bt.insert(30);
bt.insert(60);
bt.insert(50);
bt.insert(70);
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
var found = bt.searchValueinTree(bt.root,100);
console.log(found);
var node1 = bt.deleteValueInTree(bt.root,50);
console.log("inOrder Traversal");
bt.inorderTraversal(node1);
console.log("post order traversal");
bt.postOrderTraversal(node1);
console.log("pre Order traversal");
bt.preOrderTraversal(node1);