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

function reverse(head, k, length) {
  if (head === null) return null;
  if (k > length) return head;

  let current = head;
  let next = null;
  let prev = null;
  let count = 0;

  while (count < k && current != null) {
    next = current.next;
    current.next = prev;

    prev = current;
    current = next;
    count++;
  }

  if (next !== null) head.next = reverse(next, k, length - k);

  return prev;
}

let myLinkedList = new LinkedList(1);
myLinkedList.append(2).append(3).append(4).append(5);


console.log(myLinkedList.printList());

myLinkedList.head = reverse(myLinkedList.head, 5, myLinkedList.length);

console.log(myLinkedList.printList());
