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

    deleteNode(data){
        let node = this.root;

        function searchSmallest(node){
            let curData;
            if(node.left == null){
                curData = node.data
                node = node.right
                return curData
            }
        return searchSmallest(node.left)
        }

        function findNodeData(node){
            if(data == node.data && node.right){
                let smallestDataNode = searchSmallest(node.right)
                node.data = smallestDataNode;
                return true
            }
            if(data<node.data){
                return findNodeData(node.left)
            }
            if(data>node.data){
                return findNodeData(node.right)
            }
            return false
        }
       return findNodeData(node)
    }
}

const tree = new BST(15)

tree.addNode(1)
tree.addNode(6)
tree.addNode(15)
tree.addNode(22)
tree.addNode(23)
tree.deleteNode(15)
console.log(tree.searchData(1))
console.log(tree)
// console.log(tree)