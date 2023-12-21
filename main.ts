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

        if (this.length === 1) {
            this.head = null;
            this.tail = null;
        } else {
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

    unshift(value: T) {
        const newNode = new ListNode(value);
    
        if (this.head === null) {
            this.head = newNode;
            this.tail = newNode;
        } else {
            this.head.prev = newNode;
            newNode.next = this.head;
            this.head = newNode;
        }
    
        this.length++;
        return this;
    }

    get(index: number) {
        if (index < 0 || index >= this.length) return null;
    
        let current = this.head;
        for (let i = 0; i < index; i++) {
            if (current) {
                current = current.next;
            }
        }
    
        return current;
    }
    
    set(index: number, value: T) {
        const node = this.get(index);
        if (node) {
            node.value = value;
            return true;
        }
    
        return false;
    }

    insert(index: number, value: T) {
        if (index < 0 || index > this.length) return false;
        if (index === 0) return !!this.unshift(value);
        if (index === this.length) return !!this.append(value);
    
        const newNode = new ListNode(value);
        const beforeNode = this.get(index - 1);
        const afterNode = beforeNode!.next;
    
        beforeNode!.next = newNode;
        newNode.prev = beforeNode;
        newNode.next = afterNode;
        afterNode!.prev = newNode;
    
        this.length++;
        return true;
    }
    
    remove(index: number) {
        if (index < 0 || index >= this.length) return null;
        if (index === 0) return this.shift();
        if (index === this.length - 1) return this.pop();
    
        const removedNode = this.get(index);
        const beforeNode = removedNode!.prev;
        const afterNode = removedNode!.next;
    
        beforeNode!.next = afterNode;
        afterNode!.prev = beforeNode;
        removedNode!.next = null;
        removedNode!.prev = null;
    
        this.length--;
        return removedNode;
    }

}





const myList = new doubleLinkedList<number>();


myList.append(6) 
myList.append(36)
myList.append(46)

console.log(myList.remove(1));
console.log(myList, "mylist");

