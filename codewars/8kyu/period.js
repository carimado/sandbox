// In this kata, we will make a function to test whether a period is late.

// Our function will take three parameters:
// last - The Date object with the date of the last period
// today - The Date object with the date of the check
// cycleLength - Integer representing the length of the cycle in days

// Return true if the number of days passed from last to today is greater than cycleLength. Otherwise, return false.

periodIsLate = (last, today, cycleLength) => {
    let daysPassed = parseInt((today - last) / (1000 * 60 * 60 * 24), 10);
    if (daysPassed > cycleLength) {
        return true
    } 
    return false
}


console.log(periodIsLate(new Date(2016, 6, 13), new Date(2016, 7, 16), 35)) // FALSE
console.log(periodIsLate(new Date(2016, 6, 13), new Date(2016, 7, 16), 28)) // TRUE