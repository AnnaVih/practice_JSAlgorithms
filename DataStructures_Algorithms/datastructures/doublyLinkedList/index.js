class Node {
    constructor(val) {
        this.val = val
        this.next = null
        this.prev = null
    }
}

class DoublyLinkedList {
    constructor() {
        this.length = 0
        this.head = null
        this.tail = null
    }

    push(val) {
        const newNode = new Node(val)
        if (!this.head) {
            this.head = newNode
            this.tail = newNode
        } else {
            const tempNode = this.tail
            tempNode.next = newNode
            newNode.prev = tempNode
            this.tail = newNode
        }
        this.length++
        return this
    }

    pop() {
        let removedNode = this.tail
        if (!this.head) {
            return undefined
        }
        if (this.length === 1) {
            this.head = null
            this.tail = null
        } else {
            this.tail = removedNode.prev
            this.tail.next = null
            removedNode.prev = null
        }
        this.length--
        return removedNode
    }

    shift() {
        if (!this.head) return undefined
        const currentHead = this.head
        if (this.length === 1) {
            this.tail = null
            this.head = null
        } else {
            this.head = currentHead.next
            this.head.prev = null
            currentHead.next = null
        }
        this.length--
        return currentHead
    }

    unshift(val) {
        const newNode = new Node(val)
        if (!this.head) {
            this.head = newNode
            this.tail = newNode
        } else {
            const currentHead = this.head
            currentHead.prev = newNode
            newNode.next = currentHead
            this.head = newNode
        }

        this.length++
        return this
    }

    get(index) {
        if (index < 0 || index >= this.length) return undefined
        const middleList = Math.round(this.length / 2)
        let counter, current
        if (index > middleList) {
            counter = this.length - 1
            current = this.tail
            while (counter !== index) {
                current = current.prev
                counter--
            }
        } else {
            counter = 0
            current = this.head
            while (counter !== index) {
                current = current.next
                counter++
            }
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
        const newNode = new Node(val)
        const beforeNode = this.get(index - 1)
        const afterNode = beforeNode.next
        beforeNode.next = newNode
        newNode.prev = beforeNode
        newNode.next = afterNode
        afterNode.prev = newNode
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
        const removed = this.get(index)
        const removedPrev = removed.prev
        const removedNext = removed.next
        removedPrev.next = removedNext
        removedNext.prev = removedPrev
        removed.next = null
        removed.prev = null
        this.length--
        return removed
    }
}