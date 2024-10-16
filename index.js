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
  if (!flavorCounts[flavor]) {
    flavorCounts[flavor] = 1
  } else {
    flavorCounts[flavor] += 1
    console.log(flavorCounts)
  }
};



// {
//   vanilla: 3,
//   strawberry: 1,
//   coffee: 2
  // }