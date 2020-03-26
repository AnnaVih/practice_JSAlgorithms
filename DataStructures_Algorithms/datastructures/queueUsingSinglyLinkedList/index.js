class Node {
    constructor(val) {
        this.val = val
        this.next = null
    }
}


class Queue {
    constructor() {
        this.first = null
        this.last = null
        this.size = 0
    }

    enqueue(val) {
        let currentLast = this.last
        const newNode = new Node(val)
        if (!this.first) {
            this.first = newNode
            this.last = newNode
        } else {
            currentLast.next = newNode
            this.last = newNode
        }
        return this.size++
    }
    dequeue() {
        if (this.size === 0) return false
        const temp = this.first
        if (this.first === this.last) {
            this.last = null
        }
        this.first = this.first.next
        this.size--
        return temp.val
    }
}