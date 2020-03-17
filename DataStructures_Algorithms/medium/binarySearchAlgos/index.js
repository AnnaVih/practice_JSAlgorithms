// const linearSearch = (list, item) => {
//     let index = -1
//     list.forEach((listItem,i)  => {
//         if(listItem === item){
//             index = i
//         }
//     })

//     return index
// // }

// console.log(linearSearch([2, 6, 7, 9, 90, 103], 90))


const binarySearch = (list, item) => {
    let min = 0
    let max = list.length - 1
    let guess
    while (min <= max) {
        guess = Math.floor((min + max) / 2)
        if (list[guess] === item) {
            return guess
        } else {
            if (list[guess] < item) {
                min = guess + 1
            } else {
                max = guess - 1
            }
        }
    }

    return -1
}

console.log(binarySearch([2, 6, 7, 9, 90, 103], 90))