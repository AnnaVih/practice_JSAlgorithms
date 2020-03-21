class Node {
    constructor(val) {
        this.val = val
        this.next = null
    }
}


class SinglyLinkedList {
    constructor() {
        this.length = 0
        this.head = null
        this.tail = null
    }

    push(val) {
        const node = new Node(val)
        if (!this.head) {
            this.head = node
            this.tail = node
        } else {
            this.tail.next = node
            this.tail = node
        }
        this.length++
        return this
    }

    pop() {
        if (!this.head) return undefined
        let current = this.head
        let newTail = current
        while (current.next) {
            newTail = current
            current = current.next
        }
        this.tail = newTail
        this.tail.next = null
        this.length--
        if (this.length === 0) {
            this.head = null
            this.tail = null
        }
        return current
    }


    shift() {
        if (!this.head) return undefined
        const currentHead = this.head
        this.head = currentHead.next
        this.length--
        if (this.length === 0) {
            this.tail = null
        }
        return currentHead
    }

    unshift(val) {
        const newNode = new Node(val)
        if (!this.head) {
            this.head = newNode
            this.tail = newNode
        } else {
            newNode.next = this.head
            this.head = newNode
        }
        this.length++
        return this
    }

    get(index) {
        if (index < 0 || index >= this.length) return undefined
        let counter = 0
        let current = this.head
        while (counter !== index) {
            current = current.next
            counter++
        }
        return current
    }

    set(index, val) {
        const foundNode = this.get(index)
        if (!foundNode) return null
        foundNode.val = val
        return true
    }

    insert(index, val) {
        if (index < 0 || index > this.length) return false
        if (index === this.length) {
            return !!this.push(val)
        }
        if (index === 0) {
            return !!this.unshift(val)
        }
        const prev = this.get(index - 1)
        const newNode = new Node(val)
        const temp = prev.next
        prev.next = newNode
        newNode.next = temp
        this.length++
        return true
    }
    remove(index) {
        if (index < 0 || index >= this.length) return undefined
        if (index === this.length - 1) {
            return !!this.pop()
        }
        if (index === 0) {
            return !!this.shift()
        }
        const prev = this.get(index - 1)
        const removed = prev.next
        const removedNext = removed.next
        prev.next = removedNext
        this.length--
        return foundNode
    }

    reverse() {
        let next = null
        let prev = null
        let node = this.head
        this.head = this.tail
        this.tail = node
        for (let i = 0; i < this.length; i++) {
            next = node.next
            node.next = prev
            prev = node
            node = next
        }
        return this
    }
}

const list = new SinglyLinkedList()
list.push('hello')