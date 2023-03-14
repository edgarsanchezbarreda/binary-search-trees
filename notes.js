// Binary Search Tree Notes

// 1. The primary difference between a regular tree is that a binary search tree can have at most 2 child nodes per node

// A key takeaway with a binary search tree is that the way the tree is structured is based off a certain criteria.
// For example, a BST can be sorted where the items on the left are lower than the value of the root or parent node, and the items on the right are greater than the value of the root or current parent node

// 2. BST Class Implementation

class BinarySearchNode {
    constructor(val, left = null, right = null) {
        this.val = val;
        this.left = left;
        this.right = right;
    }
}

// Not required, but good for keeping track of root node of tree
class BinarySearchTree {
    constructor(root = null) {
        this.root = root;
    }
}

// const E = new BinarySearchNode('E');
// const A = new BinarySearchNode('A');
// const B = new BinarySearchNode('B');
// const C = new BinarySearchNode('C');
// const D = new BinarySearchNode('D');
// const F = new BinarySearchNode('F');
// const G = new BinarySearchNode('G');

// E.left = B;
// E.right = G;
// B.left = A;
// B.right = D;
// G.left = F;

// const tree = new BinarySearchTree(E);

// 3. Searching Binary Search Tree

// class BinarySearchNode2 {
//     constructor(val, left = null, right = null) {
//         this.val = val;
//         this.left = left;
//         this.right = right;
//     }
//     find(sought) {
//         // Where this is the node that you are calling find on
//         let currentNode = this;
//         while (currentNode) {
//             console.log('Visiting:', currentNode.val);
//             if (currentNode.val === sought) return currentNode;
//             if (currentNode.val > sought) {
//                 currentNode = currentNode.left;
//             } else {
//                 currentNode = currentNode.right;
//             }
//         }
//     }
// }

// class BinarySearchTree2 {
//     constructor(root = null) {
//         this.root = root;
//     }
// }

// const E = new BinarySearchNode2('E');
// const A = new BinarySearchNode2('A');
// const B = new BinarySearchNode2('B');
// const C = new BinarySearchNode2('C');
// const D = new BinarySearchNode2('D');
// const F = new BinarySearchNode2('F');
// const G = new BinarySearchNode2('G');

// E.left = B;
// E.right = G;
// B.left = A;
// B.right = D;
// G.left = F;

// const tree = new BinarySearchTree2(E);

// 4. Run Time for BST

// Every choice that is made when traversing the BST, the number of optional nodes to look for gets cut in half.
// This is a great performace boost!

// For n nodes we need to search, at most O(log n) nodes

// 5. Balancing Trees

// In order for a BST to be efficient, it must be balanced, meaning that you must minimize the height of the tree.
// This is so that searching for any node requires a shorter path and less steps.

// Ways to balance a tree:
// 	- Shuffle the nodes randomly and the insert nodes where they must go according to order
// 	- Sort nodes, then insert from the middle working out

// There are algorithms that you can write to create self-balancing trees.
// EX: AVL tree, and Red-Black Tree
// 	- These trees balance out the structure of the tree depending on the nodes that are in the tree, reducing the tree height.

// 6. Traversing BST

class BinarySearchNode3 {
    constructor(val, left = null, right = null) {
        this.val = val;
        this.left = left;
        this.right = right;
    }
    find(sought) {
        // Where this is the node that you are calling find on
        let currentNode = this;
        while (currentNode) {
            console.log('Visiting:', currentNode.val);
            if (currentNode.val === sought) return currentNode;
            if (currentNode.val > sought) {
                currentNode = currentNode.left;
            } else {
                currentNode = currentNode.right;
            }
        }
    }

    // This type of traverse method is called a "in order traverse"
    // You first print the current node's  left, than the current node, then the current node's right
    traverse(node = this.root) {
        this.traverse(node.left);
        console.log(node.val);
        this.traverse(node.right);
    }

    // Printing the current node.val first is known as "Pre Order Traversal"
    // First you print the current node, than its left, than its right
    traverse2(node = this.root) {
        console.log(node.val);
        this.traverse2(node.left);
        this.traverse2(node.right);
    }

    // Printing the current node.val last is known as "Post Order Traversal"
    //  First you print the current node's left, then its right, than the current node itself.
    traverse3(node = this.root) {
        this.traverse3(node.left);
        this.traverse3(node.right);
        console.log(node.val);
    }
}

class BinarySearchTree3 {
    constructor(root = null) {
        this.root = root;
    }
}

const E = new BinarySearchNode3('E');
const A = new BinarySearchNode3('A');
const B = new BinarySearchNode3('B');
const C = new BinarySearchNode3('C');
const D = new BinarySearchNode3('D');
const F = new BinarySearchNode3('F');
const G = new BinarySearchNode3('G');

E.left = B;
E.right = G;
B.left = A;
B.right = D;
G.left = F;

const tree = new BinarySearchTree3(E);

// 7. Hashmaps vs BST

//
