class LinkedList {
  constructor(data) {
    this.head = {
      value: data,
      next: null
    };
    this.tail = this.head;
    this.size = 1;
  }
  addNode(newData) {
    let newNode = {
      value: newData,
      next: null
    };
    this.tail.next = newNode;
    this.tail = newNode;
    this.size += 1;
  }
  // traversing(){
  //     let counter = 0;
  //     let curNode = this.head;
  //     while(counter<this.size){
  //         // console.log(curNode)
  //         curNode = curNode.next;
  //         counter++;
  //     }
  // }
  insertNode(index, value) {
    let counter = 1;
    let currentNode = this.head;
    while (counter > index) {
      counter++;
      currentNode = currentNode.next
    }
    let nextNode = currentNode.next;
    currentNode.next = {
      value: value,
      next: nextNode
    }
  }
  // deleteNode(index){
  //     let counter = 1;
  //     let lead = this.head;
  //     if(index===1){
  //         this.head = this.head.next;
  //         this.size-=1;
  //     }else{
  //         while(counter<index-1){
  //             lead = lead.next;
  //             counter++;
  //         }
  //         let nextNode = lead.next.next;
  //         lead.next= nextNode;
  //         this.head.next=lead;
  //         this.size-=1;
  //         console.log(lead)
  //     }
  // }
  deleteNode(index) {
    let counter = 1;
    let lead = this.head;
    if (index === 1) {
      this.head = this.head.next;
    } else {
      while (counter < index - 1) {
        lead = lead.next;
        counter++;
      }
      let nextNode = lead.next.next;
      lead.next = nextNode;
      //   console.log(lead);
    }
  }
}

let linkedList = new LinkedList(300)
linkedList.addNode(50)
linkedList.addNode(80)
linkedList.addNode(10)
linkedList.addNode(12)
linkedList.deleteNode(3)
// linkedList.traversing();
linkedList.insertNode(3, 400);
console.log(linkedList)

