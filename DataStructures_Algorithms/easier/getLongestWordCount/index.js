const longestWordCount = (str) => {
    const arrOfWords = str.split(' ')
    const map = {}
    let biggestLength = 0
    for (let word of arrOfWords) {
        map[word] = word.length
        if (map[word] > biggestLength) {
            biggestLength = map[word]
        }
    }
    return biggestLength
}

console.log(longestWordCount('anna he how are you'))