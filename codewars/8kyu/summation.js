// Write a program that finds the summation of every number from 1 to num. The number will always be a positive integer greater than 0.

// 2 -> 3 (1 + 2)
// 8 -> 36 (1 + 2 + 3 + 4 + 5 + 6 + 7 + 8)

const summation = num => num * (num + 1) / 2

console.log(summation(2))

// What did I learn?
// Summation Formula - n(n+1)/2
// sometimes you just need a formula when mathematics based - when JS methods, functions, loops, conditionals just dont work.