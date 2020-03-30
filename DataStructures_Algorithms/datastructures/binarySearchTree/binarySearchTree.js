class Node {
    constructor(value) {
        this.value = value
        this.left = null
        this.right = null
    }
}

class BinarySearchTree {
    constructor() {
        this.root = null
    }

    insert(value) {
        let newNode = new Node(value)
        if (this.root === null) {

            this.root = newNode
            return this
        }

        let current = this.root

        while (true) {
            if (value === current.value) return undefined
            if (value < current.value) {
                if (current.left === null) {
                    current.left = newNode
                    return this
                }
                current = current.left
            } else if (value > current.value) {
                if (current.right === null) {
                    current.right = newNode
                    return this
                }
                current = current.right
            }
        }
    }

    contains(value) {
        if (this.root === null) return false
        let current = this.root
        let found = false
        while (current && !found) {
            if (value < current.value) {
                current = current.left
            } else if (value > current.value) {
                current = current.right
            }
            return true
        }
        return false
    }

    BFS() {
        let data = []
        let queue = []
        let node
        queue.push(this.root)
        while (queue.length) {
            node = queue.shift()
            data.push(node)
            if (node.left) queue.push(node.left)
            if (node.right) queue.push(node.right)
        }
        return data
    }

    DFSPreOrder() {
        let data = []
        const traverse = node => {
            data.push(node.value)
            if (node.left) traverse(node.left)
            if (node.right) traverse(node.right)
        }
        traverse(this.root)
        return data
    }
    DFSPostOrder() {
        let data = []
        const traverse = node => {
            if (node.left) traverse(node.left)
            if (node.right) traverse(node.right)
            data.push(node.value)
        }
        traverse(this.root)
        return data
    }
    DFSInOrder() {
        let data = []
        const traverse = node => {
            if (node.left) traverse(node.left)
            data.push(node.value)
            if (node.right) traverse(node.right)
            data.push(node.value)
        }
        traverse(this.root)
        return data
    }
}

let tree = new BinarySearchTree()
tree.insert(10)
tree.insert(1)
tree.insert(4)
tree.insert(13)