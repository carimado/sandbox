// Complete the method that takes a boolean value and return a "Yes" string for true, or a "No" string for false.

// function boolToWord(bool) {
//     if (typeof bool === 'string') {
//         return true
//     }
//     return false
// }

// // TESTS
// console.log(boolToWord('Clarence'))
// console.log(boolToWord(3))
// console.log(boolToWord(['Array']))

function boolToWord(bool){
    if (bool === true) {
        return 'Yes'
    }
    return 'No'
}