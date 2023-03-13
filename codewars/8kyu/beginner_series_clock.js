// Clock shows h hours, m minutes and s seconds after midnight.
// Your task is to write a function which returns the time since midnight in milliseconds.

// Example:
// h = 0
// m = 1
// s = 1

// result = 61000

function past(h, m, s) {
    let hour = 3600000
    let minute = 60000
    let seconds = 1000

    return ((h * hour) + (m * minute) + (s * seconds))
}

console.log(past(0,1,1))
console.log(past(1,1,1))
console.log(past(0,0,0))
console.log(past(1,0,1))