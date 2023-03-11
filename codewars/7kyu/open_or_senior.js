// The Western Suburbs Croquet Club has two categories of membership, Senior and Open. They would like your help with an application form that will tell prospective members which category they will be placed.

// To be a senior, a member must be at least 55 years old and have a handicap greater than 7. In this croquet club, handicaps range from -2 to +26; the better the player the lower the handicap.

// Input
// Input will consist of a list of pairs. Each pair contains information for a single potential member. Information consists of an integer for the person's age and an integer for the person's handicap.

// Output
// Output will consist of a list of string values (in Haskell and C: Open or Senior) stating whether the respective member is to be placed in the senior or open category.

function openOrSenior(arr) {
    let result = []

    // Callback Function Method
    // arr.forEach(el => {
    //     if (el[0] >= 55 && el[1] >= 7) {
    //         result.push('Senior')
    //     } else {
    //         result.push('Open')
    //     }
    // })

    // For Loop Method
    for (let i = 0; i < arr.length; i++) {
        if (arr[i][0] >= 55 && arr[i][1] >= 7) {
            result.push('Senior')
        } else {
            result.push('Open')
        }
    }

    return result
    
}

// console.log(openOrSenior([[45, 12], [55,21], [19, -2], [104, 20]]))
// console.log(openOrSenior([[18, 20], [45, 2], [61, 12], [37, 6], [21, 21], [78, 9]]))
console.log(openOrSenior([[75,24],[79,0],[62,7],[26,15],[11,0],[55,16],[24,-2],[90,14]]))
// output = ["Open", "Open", "Senior", "Open", "Open", "Senior"]

// What did I learn?
// - Callback functions like forEach is a lot easier to check arrays in an array. You can check the index using [0], [1]
// For a For Loop i did not need to use a loop within a loop to iterate through but the index [0] or [1] to run the conditional

// Other notes:
// I learnt that  is not a higher-order function, as it does not return a function. It simply executes a provided callback function once for each element in the array. The callback function is passed as an argument to forEach(), but forEach() does not return a function.