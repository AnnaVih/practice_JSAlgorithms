const arr1 = [1,3,2,4,2,5]
const arr2 = [4,1,9,4,16,25]

const checkIfContainsEachSqueredItem = (arr1, arr2) => {
    const set = new Set()
    for(let i of arr1){
        if(!set.has(i)){
            set.add(i)
        }
    }
    for (let j of arr2){
        const squereNumberOfI = Math.pow(j, 1/2)
        if(arr2.length !== arr1.length || !set.has(squereNumberOfI)) {
            return false
        }
    }
    return true
}

console.log(checkIfContainsEachSqueredItem(arr1, arr2)) // Time Complexity O(a + b)