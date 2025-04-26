class Node {
  constructor(data = null) {
    this.data = data;
    this.next = null;
  }
  toString() {
    return `${this.data} -> ${this.next}`
  }
}

class LinkedList {
  constructor(head = null) {
    this.head = head;
  }
  is_empty() {
    return this.head === null;
  }
  size() {
    let current = this.head;
    let length = 0
    while (current) {
      length += 1;
      current = current.next;
    }
    return length
  }
  add(data) {
    // Prepending
    let node = new Node(data);
    node.next = this.head;
    this.head = node;
  }
  search(key) {
    let current = this.head;
    while (current) {
      if (current.data === key) {
        return current;
      } else {
        current = current.next
      }
    }
    return null
  }
  insert(data, index) {
    if (index === 0) {
      this.add(data);
      return true;
    } else if (index < 0) {
      return false;
    }
    let current = this.head;
    let new_node = new Node(data);
    while (index > 0) {
      if (!current) return false;
      current = current.next;
      index -= 1;
    }
    let prev = current;
    let next = current.next;
    prev.next = new_node;
    new_node.next = next;
  }
  remove(key) {
    current = this.head;
    previous = null;
    found = false;
    while (current && !found) {
      if (current.data === key && current === this.head) {
        this.head = current.next;
        found = true;
      } else if (current.data === key) {
        previous.next = current.next;
        found = true;
      } else {
        previous = current;
        current = current.next;
      }
    }
    return current.data
  }
  toString() {
    return `${this.head}`
  }
}


const n1 = new Node(0);
console.log(`N1: ${n1}`);

const l1 = new LinkedList();
console.log(`LinkedList: ${l1}`);

console.log(`Is Empty: ${l1.is_empty()}`);
l1.head = n1;
console.log(`Is Empty: ${l1.is_empty()}`);

l1.add(10);
l1.add(20);
l1.add(30);
l1.add(40);
l1.add(60);
l1.add(70);
l1.add(80);
l1.add(90);
l1.add(100);

console.log(`LinkedList: ${l1}`);
console.log(`Size: ${l1.size()}`);

l1.insert(50, 5);
console.log(`LinkedList: ${l1}`);
console.log(`Size: ${l1.size()}`);

console.log(l1.size());

let n = l1.search(20);
console.log(n);
