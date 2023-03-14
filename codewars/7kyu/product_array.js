// Given an array/list [] of integers , Construct a product array Of same size Such That prod[i] is equal to The Product of all the elements of Arr[] except Arr[i].

// Input >> Output 
// productArray ({12,20}) ==>  return {20,12}

// Solution 1
// function productArray(arr){
//     let result = []
//     for (let i = 0; i < arr.length; i++) {
//         let product = 1;

//         for (let j = 0; j < arr.length; j++) {
//             if (i !== j) {
//                 product *= arr[j]
//             }
//         }
//         result.push(product)
//     }
//     return result
// }

// Solution 2
function productArray(arr) {
    let result = arr.map((num, index) => {
        let withoutSelf = arr.filter((_, i) => i !== index)
        return withoutSelf.reduce((a, b) => a * b, 1)
    })
    return result
}


console.log(productArray([12,20]))
console.log(productArray([3,27,4,2]))
console.log(productArray([13,10,5,2,9]))
console.log(productArray([16,17,4,3,5,2]))

// Notes for - console.log(productArray([3,27,4,2]))
// The inner loop skips the index[0] because it matches, it moves to 27 and iterates through all elements, stores it in the product variable. Once complete it pushes to the result array. Then it moves to 4, does the same thing, then 2, the same thing.