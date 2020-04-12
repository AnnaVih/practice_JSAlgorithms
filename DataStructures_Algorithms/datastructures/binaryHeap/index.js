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

    // extractMax(){
    //     const max = this.values[0]
    //     const end = this.values.pop()
    //     this.values[0] = end
    //     this.sinkDown()
    //     return max
    // }

    // sinkDown() {
    //     let idx = 0
    //     const length = this.values.length
    //     const element = this.values[0]
    //     while(true){
    //         let leftChildIdx = 2 * idx + 1
    //         let rightChildIdx = 2 * idx + 2
    //     }
    // }
}

let heap = new MaxBinaryHeap()
heap.insert(55)