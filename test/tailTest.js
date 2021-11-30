const assertEqual = require('../tail');


// Test Case: Check the original array
const words = ["Yo Yo", "Lighthouse", "Labs"];
assertEqual(words.length, 3); // original array should still have 3 elements!

assertEqual(tail(words).length, 2); // should PASS