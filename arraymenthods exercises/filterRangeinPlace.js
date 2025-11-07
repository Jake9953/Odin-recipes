// Filter range "in place"
// importance: 4
// Write a function filterRangeInPlace(arr, a, b) that gets an array arr and removes from it
// all values except those that are between a and b.
// The function should only modify the array. It should not return anything.

// Example:
// let arr = [5, 3, 8, 1];
// filterRangeInPlace(arr, 1, 4); 
// alert(arr); // [3, 1]

// ---------------------------------------------

// Original array of prices
let price = [100, 2000, 550, 630, 870, 932, 999, 5000, 2300, 4500, 2012];

// Define the function that will filter the array in place
function filterRangeInPlace(arr, min, max) {
  // Loop through each element of the array using its index
  for (let i = 0; i < arr.length; i++) {

    // Get the current value at index i
    let value = arr[i];

    // Check if the value is OUTSIDE the range (less than min OR greater than max)
    if (value < min || value > max) {

      // If it’s outside the range, remove that element from the array
      arr.splice(i, 1);

      // After removing an element, the next one shifts into its place,
      // so we reduce i by 1 to recheck this new shifted element.
      i--;
    }
  }

  // No return statement because we are modifying the original array directly
}

// Call the function — this will modify the 'price' array directly
filterRangeInPlace(price, 500, 1500);

// Display the modified array in the console
console.log(price); // [550, 630, 870, 932, 999]
