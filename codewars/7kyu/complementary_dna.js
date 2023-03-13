// In DNA strings, symbols "A" and "T" are complements of each other, as "C" and "G". Your function receives one side of the DNA; you need to return the other complementary side. DNA strand is never empty or there is no DNA at all.

// Example: (Input --> Output)
// "ATTGC" --> "TAACG"
// "GTAT" --> "CATA"

// First Attempt - Success

// function DNAStrand(dna){
//     let complementarySide = ''
//     for (let i = 0; i < dna.length; i++){
//         char = dna[i]
//         if (char === "A") {
//             complementarySide += "T"
//         } else if (char === "G") {
//             complementarySide += "C"
//         } else if (char === "T") {
//             complementarySide += "A"
//         } else if (char === "C") {
//             complementarySide += "G"
//         } else {
//             complementarySide += "C"
//         }
//     }
//     return complementarySide
// }

// Clever Solution from another user:
let pairs = {A:'T',T:'A',C:'G',G:'C'};
const DNAStrand = dna => dna.replace(/./g, c => pairs[c]);

console.log(DNAStrand("ATTGC"))
console.log(DNAStrand("GTAT"))

