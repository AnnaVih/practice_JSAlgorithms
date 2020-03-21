class Node {
    constructor(val) {
        this.val = val
        this.next = null
    }
}


class Stack {
    constructor() {
        this.first = null
        this.last = null
        this.size = 0
    }

    push(val) {
        const newNode = new Node(val)
        if (!this.first) {
            this.first = newNode
            this.last = newNode
        } else {
            let currentFirst = this.first
            this.first = newNode
            this.first.next = currentFirst
        }
        this.size++
    }

    pop() {
        let currentFirst = this.first
        if (!this.size) return false
        if (this.size === 1) {
            this.first = null
            this.last = null
        } else {
            this.first = currentFirst.next
        }
        this.size--
        return currentFirst

    }
}