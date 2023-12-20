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
        this.myList = new doubleLinkedList();
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
    log(myList, pop) { }
}
(), "pop";
;
console.log(myList, "mylist");
//# sourceMappingURL=main.js.map