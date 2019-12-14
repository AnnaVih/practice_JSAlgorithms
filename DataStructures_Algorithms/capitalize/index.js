// --- Directions
// Write a function that accepts a string.  The function should
// capitalize the first letter of each word in the string then
// return the capitalized string.
// --- Examples
//   capitalize('a short sentence') --> 'A Short Sentence'
//   capitalize('a lazy fox') --> 'A Lazy Fox'
//   capitalize('look, it is working!') --> 'Look, It Is Working!'

const capitalize = str => {
  const arrOfStr = str.split(' ')
  const words = []
  for(let word of arrOfStr){
    const wordCapitalized = word[0].toUpperCase() + word.slice(1)
    words.push(wordCapitalized)
  }
  return words.join(' ')
}

// const capitalize = str => {
//   let result = str[0].toUpperCase()
//   for(let i = 1; i < str.length; i++){
//     if(str[i - 1] === ' '){
//       result += str[i].toUpperCase()
//     } else {
//       result += str[i]
//     }
//   }
//   return result
// }

module.exports = capitalize;
