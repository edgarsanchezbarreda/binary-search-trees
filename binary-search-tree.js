class Node {
    constructor(val, left = null, right = null) {
        this.val = val;
        this.left = left;
        this.right = right;
    }
}

class BinarySearchTree {
    constructor(root = null) {
        this.root = root;
    }

    /** insert(val): insert a new node into the BST with value val.
     * Returns the tree. Uses iteration. */

    insert(val) {
        if (!this.root) {
            this.root = new Node(val);
            return this;
        }

        let currentNode = this.root;

        while (true) {
            if (val < currentNode.val) {
                if (currentNode.left === null) {
                    currentNode.left = new Node(val);
                    return this;
                } else {
                    currentNode = currentNode.left;
                }
            } else if (val > currentNode.val) {
                if (currentNode.right === null) {
                    currentNode.right = new Node(val);
                    return this;
                } else {
                    currentNode = currentNode.right;
                }
            }
        }
    }

    /** insertRecursively(val): insert a new node into the BST with value val.
     * Returns the tree. Uses recursion. */

    insertRecursively(val, currentNode = this.root) {
        if (this.root === null) {
            this.root = new Node(val);
            return this;
        }

        if (val < currentNode.val) {
            if (currentNode.left === null) {
                currentNode.left = new Node(val);
                return this;
            }
            return this.insertRecursively(val, currentNode.left);
        } else {
            if (currentNode.right === null) {
                currentNode.right = new Node(val);
                return this;
            }
            return this.insertRecursively(val, currentNode.right);
        }
    }

    /** find(val): search the tree for a node with value val.
     * return the node, if found; else undefined. Uses iteration. */

    find(val) {
        let currentNode = this.root;
        while (currentNode) {
            if (currentNode.val === val) return currentNode;
            if (currentNode.val > val) {
                currentNode = currentNode.left;
            } else {
                currentNode = currentNode.right;
            }
        }
    }

    /** findRecursively(val): search the tree for a node with value val.
     * return the node, if found; else undefined. Uses recursion. */

    findRecursively(val, currentNode = this.root) {
        while (currentNode) {
            if (currentNode.val === val) return currentNode;
            if (currentNode.val > val) {
                return this.findRecursively(val, currentNode.left);
            } else {
                return this.findRecursively(val, currentNode.right);
            }
        }
    }

    /** dfsPreOrder(): Traverse the array using pre-order DFS.
     * Return an array of visited nodes. */

    dfsPreOrder() {
        let nodes = [];
        let currentNode = this.root;

        function traverse(node) {
            nodes.push(node.val);
            node.left && traverse(node.left);
            node.right && traverse(node.right);
        }

        traverse(currentNode);
        return nodes;
    }

    /** dfsInOrder(): Traverse the array using in-order DFS.
     * Return an array of visited nodes. */

    dfsInOrder() {
        let nodes = [];
        let currentNode = this.root;

        function traverse(node) {
            node.left && traverse(node.left);
            nodes.push(node.val);
            node.right && traverse(node.right);
        }

        traverse(currentNode);
        return nodes;
    }

    /** dfsPostOrder(): Traverse the array using post-order DFS.
     * Return an array of visited nodes. */

    dfsPostOrder() {
        let nodes = [];
        let currentNode = this.root;

        function traverse(node) {
            node.left && traverse(node.left);
            node.right && traverse(node.right);
            nodes.push(node.val);
        }

        traverse(currentNode);
        return nodes;
    }

    /** bfs(): Traverse the array using BFS.
     * Return an array of visited nodes. */

    bfs() {
        let nodes = [];
        let queue = [];
        let currentNode = this.root;

        queue.push(currentNode);

        while (queue.length) {
            currentNode = queue.shift();
            nodes.push(currentNode.val);
            if (currentNode.left) {
                queue.push(currentNode.left);
            }
            if (currentNode.right) {
                queue.push(currentNode.right);
            }
        }

        return nodes;
    }

    /** Further Study!
     * remove(val): Removes a node in the BST with the value val.
     * Returns the removed node. */

    remove(val) {}

    /** Further Study!
     * isBalanced(): Returns true if the BST is balanced, false otherwise. */

    isBalanced() {}

    /** Further Study!
     * findSecondHighest(): Find the second highest value in the BST, if it exists.
     * Otherwise return undefined. */

    findSecondHighest() {}
}

module.exports = BinarySearchTree;
