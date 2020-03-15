const factorial = num => {
    let factorial = 1
    for (let i = 1; i <= num; i++) {
        factorial *= i
    }

    return factorial
}


const factorialRecursive = n => {
    if (n === 0) return 1

    return n * factorial(n - 1)
}


console.log(factorialRecursive(3))

console.log(factorial(3)) // returns 6