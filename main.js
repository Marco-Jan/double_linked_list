"use strict";
class ListNode {
    constructor(value) {
        this.next = null;
        this.prev = null;
        this.value = value;
    }
}
class doubleLinkedList {
    constructor() {
        this.head = null;
        this.tail = null;
        this.length = 0;
    }
    append(value) {
        const newNode = new ListNode(value);
        if (this.head === null) {
            this.head = newNode;
            this.tail = newNode;
        }
        else {
            if (this.tail) //nicht null
             {
                this.tail.next = newNode;
                newNode.prev = this.tail;
            }
            this.tail = newNode;
        }
        this.length++;
        return this;
    }
    pop() {
        if (this.head === null) {
            return null;
        }
        const currentTail = this.tail;
        if (this.length === 1) {
            this.head = null;
            this.tail = null;
        }
        else {
            this.tail = currentTail.prev;
            if (this.tail) {
                this.tail.next = null;
            }
        }
        this.length--;
        currentTail.next = null;
        return currentTail;
    }
    shift() {
        if (this.length === 0)
            return -1;
        const currentHeadNote = this.head;
        if (this.length === 1) {
            this.head = null;
            this.tail = null;
        }
        else {
            this.head = this.head.next;
            if (this.head) {
                this.head.prev = null;
            }
        }
        currentHeadNote.next = null;
        currentHeadNote.prev = null;
        this.length--;
        return currentHeadNote;
    }
    unshift(value) {
        const newNode = new ListNode(value);
        if (this.head === null) {
            this.head = newNode;
            this.tail = newNode;
        }
        else {
            this.head.prev = newNode;
            newNode.next = this.head;
            this.head = newNode;
        }
        this.length++;
        return this;
    }
    get(index) {
        if (index < 0 || index >= this.length)
            return null;
        let current = this.head;
        for (let i = 0; i < index; i++) {
            if (current) {
                current = current.next;
            }
        }
        return current;
    }
    set(index, value) {
        const node = this.get(index);
        if (node) {
            node.value = value;
            return true;
        }
        return false;
    }
    insert(index, value) {
        if (index < 0 || index > this.length)
            return false;
        if (index === 0)
            return !!this.unshift(value);
        if (index === this.length)
            return !!this.append(value);
        const newNode = new ListNode(value);
        const beforeNode = this.get(index - 1);
        const afterNode = beforeNode.next;
        beforeNode.next = newNode;
        newNode.prev = beforeNode;
        newNode.next = afterNode;
        afterNode.prev = newNode;
        this.length++;
        return true;
    }
    remove(index) {
        if (index < 0 || index >= this.length)
            return null;
        if (index === 0)
            return this.shift();
        if (index === this.length - 1)
            return this.pop();
        const removedNode = this.get(index);
        const beforeNode = removedNode.prev;
        const afterNode = removedNode.next;
        beforeNode.next = afterNode;
        afterNode.prev = beforeNode;
        removedNode.next = null;
        removedNode.prev = null;
        this.length--;
        return removedNode;
    }
}
const myList = new doubleLinkedList();
myList.append(6);
myList.append(36);
myList.append(46);
console.log(myList.remove(1));
console.log(myList, "mylist");
//# sourceMappingURL=main.js.map