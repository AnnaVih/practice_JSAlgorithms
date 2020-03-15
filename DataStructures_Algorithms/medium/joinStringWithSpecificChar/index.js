const joinStringWithSpecificChar = (arr, char) => {
    const recursive = (index, finalString) => {
        finalString += arr[index]
        if (index === arr.length - 1) {
            return finalString
        } else {
            return recursive(index + 1, finalString + char)
        }
    }

    return recursive(0, '')
}

console.log(joinStringWithSpecificChar(['a', 'n', 'n', 'a'], '+'))