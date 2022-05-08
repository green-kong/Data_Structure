class Node {
  constructor(data, nextNode = null) {
    this.data = data;
    this.nextNode = nextNode;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.size = 0;
  }

  log = () => {
    let node = this.head;
    while (node !== null) {
      console.log(node.data);
      node = node.nextNode;
    }
  };

  unshiftNode = (data) => {
    const newNode = new Node(data, this.head);
    this.head = newNode;
    if (this.tail === null) {
      this.tail = newNode;
    }
    this.size++;
  };

  pushNode = (data) => {
    const newNode = new Node(data);

    if (this.size === 0) {
      this.head = newNode;
    } else {
      let tmpNode = this.head;

      while (tmpNode.nextNode !== null) {
        tmpNode = tmpNode.nextNode;
      }

      tmpNode.nextNode = newNode;
      this.tail = newNode;
    }

    this.size += 1;
  };

  insertNode = (data, idx) => {
    if (idx < 0 || idx > this.size) {
      console.log('인덱스 에러');
      return;
    }

    const newNode = new Node(data);

    if (idx === 0) {
      newNode.nextNode = this.head;
      this.head = newNode;
      this.size += 1;
      return;
    }

    let count = 0;
    let tmpNode = this.head;

    while (count <= idx) {
      count += 1;
      if (count === idx) {
        newNode.nextNode = tmpNode.nextNode;
        tmpNode.nextNode = newNode;
        if (idx === this.size - 1) {
          this.tail === newNode;
        }
        this.size += 1;
        return;
      }
      tmpNode = tmpNode.nextNode;
    }
  };

  getDataAt = (idx) => {
    if (idx < 0 || idx >= this.size) {
      console.log('인덱스 에러');
      return;
    }

    let tmpNode = this.head;
    let count = 0;

    while (count < idx) {
      tmpNode = tmpNode.nextNode;
      count += 1;
    }

    return tmpNode.data;
  };

  removeNodeAt(idx) {
    if (idx < 0 || idx >= this.size) {
      console.log('인덱스 에러');
      return;
    }

    if (idx === 0) {
      this.head = this.head.nextNode;
    } else {
      let tmpNode = this.head;
      let count = 0;
      while (count < idx) {
        count += 1;
        if (count === idx) {
          tmpNode.nextNode = tmpNode.nextNode.nextNode;
          if (idx === this.size - 1) {
            this.tail = tmpNode.nextNode || tmpNode;
          }
        }
        tmpNode = tmpNode.nextNode;
      }
    }

    this.size -= 1;
    if (this.size === 0) {
      this.tail = null;
    }
  }
}

const linkedList = new LinkedList();

linkedList.unshiftNode(1);

linkedList.pushNode(3);

console.log(linkedList.tail);

console.log(linkedList.size);

linkedList.removeNodeAt(1);

console.log(linkedList.tail);
linkedList.removeNodeAt(0);
console.log(linkedList.tail);
console.log(linkedList.head);
console.log(linkedList.size);
