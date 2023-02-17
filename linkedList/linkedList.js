// 10 --> 5 --> 16

class LinkedList {
  constructor(value) {
    this.head = new Node(value);

    this.tail = this.head;
    this.length = 1;
  }

  append(value) {
    const newNode = new Node(value);

    this.tail.next = newNode;

    this.tail = newNode;
    this.length++;
    return this;
  }

  prepend(value) {
    const newNode = new Node(value);
    newNode.next = this.head;

    this.head = newNode;
    this.length++;
    return this;
  }

  insert(index, value) {
    // check params
    if (index >= this.length) {
      this.append(value);
      return this;
    }

    const node = new Node(value);

    // get to the node
    const leader = this.traverseToIndex(index - 1);
    node.next = leader.next;
    leader.next = node;
    this.length++;
    return this;
  }

  traverseToIndex(index) {
    let counter = 0;
    let currentNode = this.head;
    while (counter !== index) {
      currentNode = currentNode.next;
      counter++;
    }
    return currentNode;
  }

  remove(index) {
    if (index >= this.length) {
      return this;
    }

    const leader = this.traverseToIndex(index - 1);
    const node = leader.next;
    leader.next = node.next;
    return this;
  }

  printList() {
    const array = [];
    let currentNode = this.head;

    while (currentNode !== null) {
      array.push(currentNode.value);
      currentNode = currentNode.next;
    }

    return array;
  }
}

class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

let myLinkedList = new LinkedList(10);
myLinkedList.append(5).append(16).prepend(1).insert(2, 99).remove(2).remove(1);

console.log(myLinkedList.printList());
