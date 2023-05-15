console.log("Welcome To The Java Script");

// Generate 5 random 3 digit values
let values = [];
for (let i = 0; i < 5; i++) {
  values.push(Math.floor(Math.random() * 900) + 100);
}

// Find the minimum and maximum values using if-else statements
let minValue = values[0];
let maxValue = values[0];
for (let i = 1; i < values.length; i++) {
  if (values[i] < minValue) {
    minValue = values[i];
  } else if (values[i] > maxValue) {
    maxValue = values[i];
  }
}

// Output the results
console.log("Random values: " + values.join(", "));
console.log("Minimum value: " + minValue);
console.log("Maximum value: " + maxValue);
