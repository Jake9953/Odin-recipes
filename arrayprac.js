function sumOfTripledEvens(array) {
  let sum = 0;
  for (let i = 0; i < array.length; i++) {
    // Step 1: If the element is an even number
    if (array[i] % 2 === 0) {
      // Step 2: Multiply this number by three
      const tripleEvenNumber = array[i] * 3;

      // Step 3: Add the new number to the total
      sum += tripleEvenNumber;
    }
  }
  return sum;
}

// map function in arrays
const array = [4, 6, 3, 7]

// pass function to map

const mapped = array.map((x) => x * 2)

console.log(mapped)

const num = [2, 3, 4]
const square = num.map(squares)

console.log(square)
function squares(element) {
  return Math.pow(element, 2)
}

// filter funtions

// we will filter oddnumbers in alist of numbers
let nums = [1, 4, 6, 7, 3, 9, 8]

let odds = nums.filter(odd)

console.log(odds)



function odd(element) {
  return element % 2 !== 0

}


// reduce function
// Calculate the average of grades by summing all elements with reduce and dividing by the number of grades

const grades = [45, 70, 65, 50]

const OverallGrade = grades.reduce(average) / 4;

console.log(OverallGrade)

function average(accumulator, element) {
  return accumulator + element;
}
