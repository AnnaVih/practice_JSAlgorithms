class MaxBinaryHeap {
    constructor() {
        this.value = []
    }

    insert(element) {
        this.values.push(element)
        this.bubbleUp()
    }

    bubbleUp() {
        let index = this.values.length - 1
        const element = this.values[index]
        while (index > 0) {
            let parentIdx = Math.floor((index - 1) / 2)
            let parent = this.values[parentIdx]
            if (element <= parent) break
            this.values[parentIdx] = parent
            idx = parentIdx
        }
    }
}

let heap = new MaxBinaryHeap()
heap.insert(55)