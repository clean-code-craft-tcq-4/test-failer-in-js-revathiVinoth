const { expect } = require("chai");

const formattedPairColorMap = [];

const majorColors = ["White", "Red", "Black", "Yellow", "Violet"];
const minorColors = ["Blue", "Orange", "Green", "Brown", "Slate"];

function getLongestMajorColor() {
  let longestStringLength = 0;
  for (let i = 0; i < majorColors.length; i++) {
    if (majorColors[i].length > longestStringLength) {
      longestStringLength = majorColors[i].length;
    }
  }
  return longestStringLength;
}

function formatPairNo(i, j) {
  //If numbers more than one digit
  if (i * 5 + j + 1 < 10) {
    return `${i * 5 + j + 1}  |`;
  } else {
    return `${i * 5 + j + 1} |`;
  }
}

function formatPairColor(i, j, maxIndent) {
  const length = maxIndent - majorColors[i].length;
  return `${majorColors[i]}${Array(length + 1)
    .fill("\xa0")
    .join("")}|${minorColors[j]}`;
}

function print_color_map() {
  const maxIndent = getLongestMajorColor();
  for (let i = 0; i < majorColors.length; i++) {
    for (let j = 0; j < minorColors.length; j++) {
      const pairNo = formatPairNo(i, j);
      const colorCode = formatPairColor(i, j, maxIndent);
      console.log(pairNo + colorCode);
      formattedPairColorMap.push(pairNo + colorCode);
    }
  }
  return majorColors.length * minorColors.length;
}

function test_color_map_format() {
  print_color_map();
  const longestStringInMap = formattedPairColorMap.reduce(function (
    previousColorCodePairValue,
    currentColorCodePairValue
  ) {
    return previousColorCodePairValue.length > currentColorCodePairValue.length
      ? previousColorCodePairValue
      : currentColorCodePairValue;
  });

  formattedPairColorMap.forEach((colorPair) => {
    expect(colorPair.indexOf("|")).equals(longestStringInMap.indexOf("|"));
    expect(colorPair.lastIndexOf("|")).equals(
      longestStringInMap.lastIndexOf("|")
    );
  });
}

function test_numeric_values() {
  result = print_color_map();
  expect(result.toString()).equals(formattedPairColorMap.pop().split(" |")[0]);
}

result = print_color_map();
expect(result).equals(25);
test_color_map_format();
print_color_map();
test_numeric_values();

console.log("All is well (maybe!)");
