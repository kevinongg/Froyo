// Prompt user to enter a list of comma-separate froyo flavors
const userInput = prompt(`Enter a list of comma-separated froyo flavors` , `vanilla,vanilla,vanilla,strawberry,coffee,coffee`);
// console.log(userInput)

// Turn users input into an array
const flavorArray = userInput.split(`,`);
// console.log(flavorArray)

// Create a new empty object to store flavors
const flavorCounts = {};

// Iterate through array of flavors
for(let i = 0; i < flavorArray.length; i++) {
  const flavor = flavorArray[i] // vanilla
  // If it's not in the object
  if (!flavorCounts[flavor]) {
    // Add the flavor to the object with a count of 1
    flavorCounts[flavor] = 1
    // If it is in the object
  } else {
    // Increase the count by 1
    flavorCounts[flavor] += 1
  }
};

// Console log the object
console.log(flavorCounts)


// {
//   vanilla: 3,
//   strawberry: 1,
//   coffee: 2
  // }