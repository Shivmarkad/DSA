class Node {
    constructor(data, left = null, right = null) {
        this.data = data;
        this.left = left,
            this.right = right
    }
}

// const depthFirstValues = (root)=>{
//     if(root == null) return [];
//     const result = [];
//     const stack = [root];
//     while(stack.length > 0){
//         const current = stack.pop();
//         result.push(current.value)
//         if(current.right) stack.push(current.right)
//         if(current.left) stack.push(current.left)
//     }
//     return result
// }

class BST {
    constructor() {
        this.root = null
    }

    add(data) {
        const node = this.root
        if (node === null) {
            this.root = new Node(data);
            return;
        } else {
            const searchTree = function (node) {
                if (data < node.data) {
                    if (node.left == null) {
                        node.left = new Node(data)
                        return;
                    } else if (node.left != null) {
                        return searchTree(node.left)
                    }
                } else if (data > node.data) {
                    if (node.right == null) {
                        node.right = new Node(data);
                        return;
                    } else if (node.right !== null) {
                        return searchTree(node.right)
                    }
                } else {
                    return null;
                }
            }
            return searchTree(node)
        }
    }

    bfs() {
        let currentNode = this.root;
        let queue = [];
        let result = [];
        queue.push(currentNode);
        while (queue.length) {
            currentNode = queue.shift();
            result.push(currentNode.data);
            if (currentNode.left) queue.push(currentNode.left);
            if (currentNode.right) queue.push(currentNode.right);
        }
        return result;
    }

    dfsPostOrder() {
        let result = []
        function traverse(currentNode) {
            result.push(currentNode.data)
            if (currentNode.left) traverse(currentNode.left)
            if (currentNode.right) traverse(currentNode.right)
        }
        traverse(this.root)
        return result
    };

    dfsPreOrder() {
        let result = []
        function traverse(currentNode) {
            if (currentNode.left) traverse(currentNode.left)
            if (currentNode.right) traverse(currentNode.right)
            result.push(currentNode.data)
        }
        traverse(this.root)
        return result;
    }
}

const bst = new BST();
bst.add(2)
bst.add(8)
bst.add(6)
bst.add(12)
bst.add(1)

         //     2
         //   /    \
        //   1      8
        //        /    \
       //        6      12


console.log(bst)

console.log(bst.bfs())
console.log(bst.dfsPostOrder())
console.log(bst.dfsPreOrder())