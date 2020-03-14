const filterOutStr = (arr) => {
    return arr.filter(i => {
        if (typeof i === 'number') {
            return i
        }
    })

}

console.log(filterOutStr([2, 'aa', 4, 'd']))