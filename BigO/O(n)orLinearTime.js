// Big O(n) or Linear Time example ('fair' score in complexity chart)

const names = ['anna', 'valeria', 'olga']
const findName = arr => {
  for(let i = 0; i < arr.length; i++){
    if(arr[i] === 'anna'){
      console.log('Found')
    }
  }
}

findName(names)