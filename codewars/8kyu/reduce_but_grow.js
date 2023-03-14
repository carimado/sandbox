// Given a non-empty array of integers, return the result of multiplying the values together in order.
// INPUT >> OUTPUT
// [1, 2, 3, 4] => 1 * 2 * 3 * 4 = 24

// Solution 1 - I submitted
function grow(arr) {
    return arr.reduce((a, b) => a * b, 1)
}

// Solution 2
const grow = x => {
    let res = 1;
    for (let i = 0; i < x.length; i++) {
      res *= x[i];
    }
    return res;
};

console.log(grow([1, 2, 3]))
console.log(grow([4, 1, 1, 1, 4]))