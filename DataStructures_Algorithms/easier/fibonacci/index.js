// --- Directions
// Print out the n-th entry in the fibonacci series.
// The fibonacci series is an ordering of numbers where
// each number is the sum of the preceeding two.
// For example, the sequence
//  [0, 1, 1, 2, 3, 5, 8, 13, 21, 34]
// forms the first ten entries of the fibonacci series.
// Example:
//   fib(4) === 3

// Itterative solution
const fib = n => {
  const result = [0, 1]
  for (let i = 2; i <= n; i++) {
    const a = result[i - 1]
    const b = result[i - 2]
    result.push(a + b)
  }
  return result[n]
}


// Recursive solution
const fibRecursive = n => {
  if (n < 2) {
    return n
  }

  return fibRecursive(n - 1) + fibRecursive(n - 2)
}


const memoized = cb => {
  const cache = {}
  return (...args) => {
    if (cache[args]) {
      return cache[args]
    } else {
      const result = cb(args)
      cache[args] = result
      return result
    }
  }
}

const fibRecursive = n => {
  if (n < 2) {
    return n
  }

  return fibRecursive(n - 1) + fibRecursive(n - 2)
}

const fib = memoized(fibRecursive)

console.log(fib(2))

module.exports = fib;
