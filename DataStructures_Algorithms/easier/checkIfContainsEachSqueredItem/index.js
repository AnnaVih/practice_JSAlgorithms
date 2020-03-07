const arr1 = [2, 3, 2, 4, 2, 5];
const arr2 = [4, 9, 4, 16, 4, 25];

const checkIfContainsEachSqueredItem = (arr1, arr2) => {
  const set = new Set();
  for (let i of arr1) {
    if (!set.has(i)) {
      set.add(i);
    }
  }
  for (let j of arr2) {
    const squereNumberOfI = Math.pow(j, 1 / 2);
    if (arr2.length !== arr1.length || !set.has(squereNumberOfI)) {
      return false;
    }
  }
  return true;
};

// const checkIfContainsEachSqueredItem = (arr1, arr2) => {
//   if (arr1.length !== arr2.length) return false;
//   for (let i = 0; i < arr1.length; i++) {
//     let correctIndex = arr2.indexOf(arr1[i] ** 2);
//     if (correctIndex === -1) return false;
//     arr2.splice(correctIndex, 1);
//   }
//   return true;
// };

// const checkIfContainsEachSqueredItem = (arr1, arr2) => {
//   if (arr1.length !== arr2.length) return false;
//   let frequencyCounter1 = {};
//   let frequencyCounter2 = {};
//   for (let val of arr1) {
//     frequencyCounter1[val] = (frequencyCounter1[val] || 0) + 1;
//   }
//   for (let val of arr2) {
//     frequencyCounter2[val] = (frequencyCounter2[val] || 0) + 1;
//   }

//   for (let key in frequencyCounter1) {
//     if (!(key ** 2 in frequencyCounter2)) {
//       return false;
//     }
//     if (frequencyCounter2[key ** 2] !== frequencyCounter1[key]) {
//       console.log(frequencyCounter2[key ** 2], frequencyCounter1[key]);
//       return false;
//     }
//   }
//   return true;
// };

console.log(checkIfContainsEachSqueredItem(arr1, arr2)); // Time Complexity O(a + b)
