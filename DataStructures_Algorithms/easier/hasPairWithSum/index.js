const hasPairWithSum = (arr, sum) => {
    const mySet = new Set()
    for(let i of arr){
        if(mySet.has(i)){
            return true
        }
        mySet.add(sum - i)
    }
    return false
}

console.log(hasPairWithSum([6,4,5,2,1,7], 9)) // Time Complexity - O(n) / Memory Complexity - O(n)