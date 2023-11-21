// Lista enlazada doble (Double Linked List)

class Node {
    constructor(data, next, prev) {
        this.data = data;
        this.next = next;
        this.prev = prev;
    }
}

class DoubleLinkedList {
    constructor() {
        this.head = null;
        this.tail = null;
        this.size = 0;
    }

    addToHead(data) {
        const newNode = new Node(data, this.head, null);
        if (!this.head) {
            this.tail = newNode;
        } else {
            this.head.prev = newNode;
        }
        this.head = newNode;
        this.size++;
    }

    addToTail(data) {
        const newNode = new Node(data, null, this.tail);
        if (!this.tail) {
            this.head = newNode;
        } else {
            this.tail.next = newNode;
        }
        this.tail = newNode;
        this.size++;
    }

    insertAt(data, index) {
        if (index < 0 || index > this.size) {
            return null;
        }

        const newNode = new Node(data, null, null);
        let current = this.head;
        let previous;

        if (index === 0) {
            newNode.next = current;
            current.prev = newNode;
            this.head = newNode;
        } else {
            for (let i = 0; i < index; i++) {
                previous = current;
                current = current.next;
            }
            newNode.next = current;
            newNode.prev = previous;
            previous.next = newNode;
            current.prev = newNode;
        }
        this.size++;
    }

    print() {
        let current = this.head;
        let result = "";
        while (current) {
            result += current.data + " <-> ";
            current = current.next;
        }
        return (result += "NULL");
    }

    reversePrint() {
        let current = this.tail;
        let result = "";
        while (current) {
            result += current.data + " <-> ";
            current = current.prev;
        }
        return (result += "NULL");
    }
}

const doubleLinkedList = new DoubleLinkedList();
doubleLinkedList.addToHead(3);
doubleLinkedList.addToHead(2);
doubleLinkedList.addToHead(5);
doubleLinkedList.addToHead(8);
console.log(doubleLinkedList.print());
console.log(doubleLinkedList.reversePrint());
doubleLinkedList.addToTail(10);
doubleLinkedList.addToTail(11);
doubleLinkedList.insertAt(4, 5);
console.log(doubleLinkedList.print());
console.log(doubleLinkedList.reversePrint());
console.log(doubleLinkedList);
