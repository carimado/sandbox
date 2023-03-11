// Write a function that takes a positive integer n, sums all the cubed values from 1 to n (inclusive), and returns that sum.
// Assume that the input n will always be a positive integer.

// 2 --> 9 (sum of the cubes of 1 and 2 is 1 + 8)
// 3 --> 36 (sum of the cubes of 1, 2, and 3 is 1 + 8 + 27)

function sumCubes(n) {

    let sum = 0

    for (let i = 0; i <= n; i++) {
        sum += Math.pow(i, 3)
    }

    return sum
}

console.log(sumCubes(3))

// What did I learn?
// I needed to iterate through the number/arg and for each iteration I had to use the Math.pow method to take the number index, cube it, then add it to the sum