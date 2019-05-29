import Node from './Node.js';

export default class LinkedList {
    constructor() {
        this.head = null;
        this.size = 0;
    }

    addElement(element) {
        const node = new Node(element);
        let current = this.head;

        if(current == null){
            this.head = node;
        } else {
            while(current.next) {
                current = current.next;
            };
            current.next = node;
        }
        this.size += 1;
    }

    toArray() {
        let current = this.head;
        const temp = [];
        while(current) {
            temp.push(JSON.stringify(current.element));
            current = current.next;
        }
        return temp;
    }

    fromArray(arr = []) {
        let lastNode = this.getLastNode();
        arr.forEach(elem => {
            let node = new Node(elem);
            if(lastNode === null) {
                this.head = node;
            } else {
                lastNode.next = node;
            }
            lastNode = node;
            this.size += 1;
        });
    }

    getLastNode() {
        if(this.head === null){
            return null;
        }
        let current = this.head;
        while(current.next) {
            current = current.next;
        }
        return current;
    }

    print() {
        console.log(this.toArray());
    }

    getMiddle() {
        //https://practice.geeksforgeeks.org/problems/finding-middle-element-in-a-linked-list/1
        let firstPtr = this.head;
        let secondPtr = this.head;
        let count = 1;
        while(firstPtr) {
            if(count%2 === 0) {
                secondPtr = secondPtr.next;
            }
            firstPtr = firstPtr.next;
            count += 1;
        }
        return secondPtr;
    }
}

/* const ll = new LinkedList();
ll.fromArray([4,5,6]);
ll.addElement(20);
ll.fromArray([31,2,1,60,61,62]);
ll.print();
console.log(ll.getMiddle()); */
