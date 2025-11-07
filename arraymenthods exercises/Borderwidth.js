// Translate border - left - width to borderLeftWidth
// importance: 5
// Write the function camelize(str) that changes dash - separated words like “my - short - string” into camel - cased “myShortString”.

// That is: removes all dashes, each word after dash becomes uppercased.

//   Examples:

// camelize("background-color") == 'backgroundColor';
// camelize("list-style-image") == 'listStyleImage';
// camelize("-webkit-transition") == 'WebkitTransition';
// P.S.Hint: use split to split the string into an array, transform it and join back.


// Define a function named 'camelize' that takes one parameter 'str'
function camelize(str) {

  // Split the string into an array wherever there's a hyphen (-)
  // Example: "border-bottom-color" becomes ["border", "bottom", "color"]
  let words = str.split("-");

  // Start a loop from the second word (index 1) to the end of the array
  for (let i = 1; i < words.length; i++) {

    // Capitalize the first letter of each word after the first one
    // words[i][0] gets the first character of the current word
    // toUpperCase() changes that first letter to uppercase
    // slice(1) takes the rest of the letters (starting from position 1)
    // Combine both parts: uppercase first letter + the rest of the word
    words[i] = words[i][0].toUpperCase() + words[i].slice(1);
  }

  // Join all words in the array back into one string
  // join('') means join them with no spaces or hyphens between
  // Example: ["border", "Bottom", "Color"] becomes "borderBottomColor"
  return words.join("");
}

// Test the function with different examples
console.log(camelize("border-bottom-color"));
// Output: borderBottomColor

console.log(camelize("background-image-size"));
// Output: backgroundImageSize
