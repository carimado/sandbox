// Given an array of integers , Find the minimum sum which is obtained from summing each Two integers product.
// Input >> Output
// minSum({5,4,2,3}) ==> return (22) 

function minSum(arr) {
    let sortDec = arr.sort((a, b) => b - a)
    let pairs = []

    while (arr.length > 0) {
        pairs.push([sortDec[0], sortDec[sortDec.length - 1]])
        sortDec.shift()
        sortDec.pop()
    }

    let multiplied = []
    for (let i = 0; i < pairs.length; i++) {
        multiplied.push(pairs[i][0] * pairs[i][1])
    }

    let result = multiplied.reduce((a, b) => a + b)

    return result

}

console.log(minSum([5,4,2,3]))
console.log(minSum([12,6,10,26,3,24]))