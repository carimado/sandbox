// In this Kata, you will be given a string and your task will be to return a list of ints detailing the count of uppercase letters, lowercase, numbers and special characters, as follows.

// Solve("*'&ABCDabcde12345") = [4,5,5,3]. 
// --the order is: uppercase letters, lowercase, numbers and special characters.

function simpleStringCharacters(str) {

    let uppercase = 0
    let lowercase = 0
    let numbers = 0
    let special = 0
    
    for (let i = 0; i < str.length; i++) {
        if (str[i].match(/[A-Z]/g)) {
            uppercase++
        } else if (str[i].match(/[a-z]/g)) {
            lowercase++
        } else if (str[i].match(/^[0-9]*$/)) {
            numbers++
        } else {
            special++
        }
    }
    
    return [uppercase, lowercase, numbers, special]

}

console.log(simpleStringCharacters("*'&ABCDabcde12345"))
