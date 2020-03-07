const array1 = ['f', 'l', 'b', 'm', 'a']
const array2 = ['k', 'a', 'c', 'l']

// const containsCommonItem = (arr1, arr2) => {
//     for(let i = 0; i < arr1.length; i++){
//         for(let j = 0; j < arr2.length; j++){
//             if(arr1[i] === arr2[j]){
//                 return true
//             }
//         }
//     }
//     return false
// } 

// console.log(containsCommonItem(array1, array2)) // Time Complexity is O(a * b) / Space Complexity O(1)

const containsCommonItem = (arr1, arr2) => {
    let map = {}
    for (let i = 0; i < arr1.length; i++) {
        if (!map[arr1[i]]) {
            const item = arr1[i]
            map[item] = true
        }
    }

    for (let j = 0; j < arr2.length; j++) {
        if (map[arr2[j]]) {
            return true
        }
    }
    return false
}

// const isContainCommonItems = (arr1, arr2) => {
//     let map = {}
//     for (let item of arr1) {
//         if (!map[item]) {
//             map[item] = true
//         }
//     }

//     for (let item of arr2) {
//         if (map[item]) return true
//     }

//     return false
// }

console.log(isContainCommonItems([1, 3, 4], [1, 3]))

console.log(containsCommonItem(array1, array2)) // Time Complexity is O(a + b) / Space Complexity O(n)