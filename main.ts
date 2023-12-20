class ListNode<T> {
    value: T;
    next: ListNode<T> | null = null;
    prev: ListNode<T> | null = null;
    constructor(value: T) {
        this.value = value;

    }
}

class doubleLinkedList<T> {
    head: ListNode<T> | null = null;
    tail: ListNode<T> | null = null;
    length: number = 0;
    constructor() { }

    append(value: T) {
        const newNode = new ListNode(value);

        if (this.head === null) {
            this.head = newNode;
            this.tail = newNode;
        } else {
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

    pop(): ListNode<T> | null {
        if (this.head === null) {
            return null;
        }

        const currentTail = this.tail as ListNode<T>;

        if (this.length === 1) {
            this.head = null;
            this.tail = null;
        } else {
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
        if (this.length === 0) return -1;

        const currentHeadNote = this.head;

        if(this.length === 1){
            this.head = null;
            this.tail = null;
        }else {
            this.head = this.head!.next;
            if (this.head) {
                this.head.prev = null;
            }
        }

        currentHeadNote!.next = null;
        currentHeadNote!.prev = null;

        this.length--;

        return currentHeadNote;

        
}





const myList = new doubleLinkedList<number>();


myList.append(6)
myList.append(36)
myList.append(46)

console.log(myList.pop(), "pop");
console.log(myList, "mylist");

