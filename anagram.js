let numChar = 256;

const areAnagram = (str1, str2) => {
  if (str1.length != str2.length) {
    return false;
  }

  let countFirstString = new Array(numChar);
  let countSecondString = new Array(numChar);

  for (let i = 0; i < numChar; i++) {
    countFirstString[i] = 0;
    countSecondString[i] = 0;
  }

  for (let j = 0; j < str1.length && j < str2.length; j++) {
    countFirstString[str1[j].charCodeAt(0)]++;
    countSecondString[str2[j].charCodeAt(0)]++;
  }

  for (let i = 0; i < numChar; i++) {
    if (countFirstString[i] != countSecondString[i]) {
      return false;
    }
  }
  return true;
};

let givenString = "bleat";
let givenString2 = "table";

const result1 = areAnagram(givenString, givenString2);

if (result1) {
  console.log(`Given ${givenString} & ${givenString2} string are Angram`);
} else {
  console.log(`Given ${givenString} & ${givenString2} string are not Angram`);
}

givenString = "eat";
givenString2 = "tar";

const result2 = areAnagram(givenString, givenString2);

if (result2) {
  console.log(`Given ${givenString} & ${givenString2} string are Angram`);
} else {
  console.log(`Given ${givenString} & ${givenString2} string are not Angram`);
}

module.exports = areAnagram;
