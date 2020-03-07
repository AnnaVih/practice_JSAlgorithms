// --- Directions
// Given a string, return the character that is most
// commonly used in the string.
// --- Examples
// maxChar("abcccccccd") === "c"
// maxChar("apple 1231111") === "1"
const maxChar = (str) => {
  const chars = {}
  let max = 0
  let maxChar = ''
  for(let char of str){
    if(chars[char]){
      chars[char]++
    } else {
      chars[char] = 1
    }
  }

  for(let char in chars){
    if(chars[char] > max){
      max = chars[char]
      maxChar = char
    }
  }

  return maxChar
}

module.exports = maxChar;
