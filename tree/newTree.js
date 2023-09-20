class Node{
    constructor(data,left=null, right=null){
        this.data = data,
        this.left = left,
        this.right = right
    }
}

class BST{
    constructor(data=null){
        this.root = new Node(data)
    }

    addNode(data){
        const newNode = new Node(data)
        if(!this.root.data){
            this.root = newNode
        }
        let node = this.root;
        function searchTree(node){
            if(data < node.data){
                if(!node.left){
                    node.left = newNode
                    return;
                }
                return searchTree(node.left)
            }
            else if(data > node.data){
                if(!node.right){
                    node.right = newNode
                    return;
                }
                return searchTree(node.right)
            }else{
                return;
            }
        }
        return searchTree(node)
    }
    searchData(data){
        let node = this.root
        function findData(node){
            if(node.data == data){
                return  true
            }
            if(data<node.data && node.left){
                return findData(node.left)
            }else if(data>node.data && node.right){
                return findData(node.right)
            }
            return false
        }
        return findData(node)
    }
    min(root){
        if(!root.left){
            return root.data
        }else{
            return this.min(root.left)
        }
    }
    delete(data){
        this.root = this.deleteNode(this.root, data)
    }
    deleteNode(root, data){
        if(root == null){
            return root
        }
        if(data< root.data){
            root.left = this.deleteNode(root.left, data)
        }else if(data > root.data){
            root.right = this.deleteNode(root.right, data)
        }else{
            if(!root.left && !root.right){
                return null
            }
            if(!root.left){
                return root.right
            }else if(!root.right){
                return root.left
            }
            root.data = this.min(root.right)
            root.right = this.deleteNode(root.right, root.data)
        }
        return root
    }
}

const tree = new BST(15)

tree.addNode(1)
tree.addNode(6)
tree.addNode(5)
tree.addNode(22)
tree.addNode(23)
tree.delete(15)
console.log(tree.searchData(1))
console.log(tree)