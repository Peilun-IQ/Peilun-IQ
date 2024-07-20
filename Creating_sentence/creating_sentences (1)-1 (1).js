// Step 1: Create an array variable called "words"
let words = ['This', 'is', 'JavaScript', 'Coding!'];

// Step 2: Create an empty string variable called "sentence"
let sentence = '';

// Step 3: Create a function called "createSentence" that takes an array as an argument
function createSentence(array) {
  // Initialize an empty string variable to store the sentence
  let sentence = '';

  // Iterate through each word element of the array
  for (let i = 0; i < array.length; i++) {
    // Add each word to the "sentence" variable
    sentence += array[i];

    // Add a space between words, except after the last word
    if (i !== array.length - 1) {
      sentence += ' ';
    }
  }

  // Return the "sentence"
  return sentence;
}

// Step 4: Call the function "createSentence" using the console.log method
console.log(createSentence(words));
