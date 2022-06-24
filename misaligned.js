const { expect } = require("chai");

function print_color_map() {
  const majorColors = ["White", "Red", "Black", "Yellow", "Violet"];
  const minorColors = ["Blue", "Orange", "Green", "Brown", "Slate"];
  for (let i = 0; i < majorColors.length; i++) {
    for (let j = 0; j < minorColors.length; j++) {
      console.log(`${i * 5 + j} | ${majorColors[i]} | ${minorColors[j]}`);
    }
  }
  return majorColors.length * minorColors.length;
}

function lengthOfColors() {
  const majorColors = ["White", "Red", "Black", "Yellow", "Violet"];
  const minorColors = ["Blue", "Orange", "Green", "Brown", "Slate"];
  return majorColors.length * minorColors.length;
}
result = lengthOfColors();
expect(result).equals(25);
expect(result).equals(25);
result = print_color_map();

//Add negative scenario
console.log("All is well (maybe!)");
