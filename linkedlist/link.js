class Node {
    constructor(data, next = null) {
        this.data = data,
            this.next = next
    }
}

class LinkedList {
    constructor() {
        this.head = null,
            this.size = 0
    }
    addFirst(data) {
        const newNode = new Node(data, this.head)
        this.head = newNode
        this.size++
    }
    addLast(data) {
        let node = new Node(data)
        if (!this.head) {
            this.head = node
            this.size++
            return
        }
        let curNode = this.head
        while (curNode.next) {
            curNode = curNode.next
        }
        curNode.next = node
        this.size++
    }

    addAt(data, index) {
        if (this.size < index) {
            return;
        }
        if (index == 0) {
            this.addFirst(data)
        }
        let curindex = 0;
        let curNode, preNode;
        curNode = this.head
        while (curindex < index) {
            preNode = curNode
            curNode = curNode.next
            curindex++
        }
        preNode.next = new Node(data, curNode)
        this.size++
    }
    printData() {
        let curNode = this.head;
        while (curNode) {
            console.log(curNode.data)
            curNode = curNode.next
        };
    }
}
const newList = new LinkedList()

newList.addFirst(1)
newList.addFirst(9)
newList.addFirst(3)
newList.addLast(9)
newList.addAt(77, 2)
newList.printData()
console.log(newList)

// LinkedList {
//     head: Node { 
//                 data: 3, 
//                 next: Node { 
//                            data: 9, 
//                            next: Node { 
//                                      data: 77, 
//                                      next: Node { 
//                                                  data: 1, 
//                                                  next: Node { 
//                                                          data: 9, 
//                                                          next: null 
//                                                          } 
//                                                  } 
//                                         } 
//                              } 
//                 },
//     size: 5
// }