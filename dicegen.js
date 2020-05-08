// aLetterArray should look like this:
// var aLetterArray = [
//    {
//      "character": "a",
//      "frequency": 0.08497 // =8.497%
//    },
// ];
var englishLetterArray = [
  { "character": "a", "frequency": 0.08497 },
  { "character": "b", "frequency": 0.01492 },
  { "character": "c", "frequency": 0.02202 },
  { "character": "d", "frequency": 0.04253 },
  { "character": "e", "frequency": 0.11162 },
  { "character": "f", "frequency": 0.02228 },
  { "character": "g", "frequency": 0.02015 },
  { "character": "h", "frequency": 0.06094 },
  { "character": "i", "frequency": 0.07546 },
  { "character": "j", "frequency": 0.00153 },
  { "character": "k", "frequency": 0.01292 },
  { "character": "l", "frequency": 0.04025 },
  { "character": "m", "frequency": 0.02406 },
  { "character": "n", "frequency": 0.06749 },
  { "character": "o", "frequency": 0.07507 },
  { "character": "p", "frequency": 0.01929 },
  { "character": "qu", "frequency": 0.00095 },
  { "character": "r", "frequency": 0.07587 },
  { "character": "s", "frequency": 0.06327 },
  { "character": "t", "frequency": 0.09356 },
  { "character": "u", "frequency": 0.02758 },
  { "character": "v", "frequency": 0.00978 },
  { "character": "w", "frequency": 0.0256 },
  { "character": "x", "frequency": 0.0015 },
  { "character": "y", "frequency": 0.01994 },
  { "character": "z", "frequency": 0.00077 }
];

class CumulativeFrequencyEntry {
  constructor(aCharacter, aCumulativeFrequency) {
    this.character = aCharacter;
    this.cumulativeFrequency = aCumulativeFrequency;
  }
}

function generateDice(aLetterArray, numDice, numSides) {
  var outputDiv = document.getElementById("outputDiv");

  alert("Starting generateDice()...");
  var numDiceFaces = numDice * numSides;
  var workingArray = [];
  var indexArray = [];
  var i = 0;

  alert("Creating workingArray and indexArray...");
  for (i = 0; i < numDiceFaces; i++) {
    workingArray.push(i);
    indexArray.push(i);
  }
  outputDiv.innerHTML = "workingArray = " + workingArray + "<br>";
  outputDiv.innerHTML += "indexArray = " + indexArray + "<br>";

  // First create a cumulative frequency list
  var cfList = [];
  for (i = 0; i < aLetterArray.length; i++) {
    var newCharacter = aLetterArray[i].character;
    var newCumulativeFrequency = 0;
    for (f = 0; f <= i; f++) {
      newCumulativeFrequency += aLetterArray[f].frequency;
    }
    var newEntry = new CumulativeFrequencyEntry(
      aLetterArray[i].character,
      newCumulativeFrequency
    );
    cfList.push(newEntry);
  }
  alert("cfList array created..." + cfList);

  // Now, put at least one instance of each letter
  // into a random position in the workingArray
  var randomValue = 0;
  var randomIndex = 0;
  for (i = 0; i < aLetterArray.length; i++) {
    randomValue = Math.floor((Math.random() * indexArray.length) + 1);
    randomIndex = indexArray.splice(randomValue, 1);
    workingArray[randomIndex] = aLetterArray[i].character;
  }
  alert("workingArray = " + workingArray);

  // Now, generate the remaining dice faces
  // with values distributed according
  // to the prescribed relative frequencies
  while (indexArray.length > 0) {
    var randomValue = 0;
    var maxRandomValue = cfList[cfList.length - 1].cumulativeFrequency * 100;
    var foundALetter = false;
    var foundLetter = '';
    var found = false;
    var currentFrequency = 0;

    while (!foundALetter) {
      randomValue = Math.floor((Math.random() * maxRandomValue) + 1) / 100;

      i = findLetterByFrequency(cfList, randomValue);

      // foundLetter = cfList[i].character;
      currentFrequency = getNumInArray(workingArray, cfList[i].character) / aLetterArray.length;
      alert("indexArray.length = " + indexArray.length + "; trying found letter: " + cfList[i].character + "; currentFrequency = " + currentFrequency);
      if (currentFrequency < cfList[i].cumulativeFrequency) {
        foundALetter = true;
        randomValue = Math.floor((Math.random() * indexArray.length) + 1);
        randomIndex = indexArray.splice(randomValue, 1);
        workingArray[randomIndex] = cfList[i].character;
      }
    }
  }

  var returnArray = [];
  for (d = 0; d < numDice; d++) {
    var newDie = [];
    for (f = 0; f < numSides; f++) {
      newDie.push(workingArray[(d * numFaces) + f]);
    }
    returnArray.push(newDie);
  }

  return returnArray;
}


function getNumInArray(anArray, aValue) {
  var counter = 0;
  for (i = 0; i < anArray.length; i++) {
    if (anArray[i] === aValue) {
      counter++;
    }
  }
  return counter;
}



function findLetterByFrequency(cfList, randomValue) {
  var found = false;
  var i = 0;

  while (!found && i < cfList.length) {
    if (randomValue < cfList[i].cumulativeFrequency) {
      found = true;
    }
    else {
      found = false;
      i++;
    }
  }
  if (!found) {
    i = 0;
  }

  return i;
}
