// Given two integers a and b, which can be positive or negative, find the sum of all the integers between and including them and return it. If the two numbers are equal return a or b.
// Note: a and b are not ordered!

function getSum(a, b) {
    let arr = [a, b].sort((a, b) => a - b)
    let highNum = Math.max(...arr)
    let lowNum = Math.min(...arr)

    let arrBetween = []

    for (let i = lowNum; i <= highNum; i++) {
        arrBetween.push(i)
    }

    let result = arrBetween.reduce((a, b) => a + b)

    return result
}


console.log(getSum(0, -1))
console.log(getSum(0, 1))
console.log(getSum(5, -1))
console.log(getSum(-125, -146))