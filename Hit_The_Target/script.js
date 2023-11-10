var startingNumberDisplay = document.getElementById('initNumber');
var minRangeDisplay = document.getElementById('min');
var maxRangeDisplay = document.getElementById('max');
//let output = document.getElementById('outputtext');
let belowRangeOutput = document.getElementById('belowRange');
let inRangeOutput = document.getElementById('inRange');
let aboveRangeOutput = document.getElementById('aboveRange');
let startingNumber, baseTarget;
let min;
let max;
let belowRange = 0;
let inRange = 0;
let aboveRange = 0;
let inRangeGuesses =[];



function onButtonClick() {
  startingNumber = 1 + Math.floor(Math.random() * 12);
  baseTarget = 1 + Math.floor(Math.random() * 12);
  min = (startingNumber * baseTarget) + 1;
  max = (startingNumber * (baseTarget+4)) - 1;

  startingNumberDisplay.textContent = startingNumber;
  minRangeDisplay.textContent = min;
  maxRangeDisplay.textContent = max;
  inRangeGuesses =[]
  belowRange,inRange,aboveRange = 0;
  belowRangeOutput.textContent = 0;
  inRangeOutput.textContent = 0;
  aboveRangeOutput.textContent = 0;
}

function multiplyCheck() {
  let input = document.getElementById('userInput').valueAsNumber;
  if((input*startingNumber == min-1) && (belowRange<1)) {
    belowRangeOutput.textContent =belowRange + 1;
  }
  else if(input*startingNumber == max+1) {
    aboveRangeOutput.textContent = aboveRange + 1;
  }
  else if((input*startingNumber>min)&&(input*startingNumber<max)&&(!inRangeGuesses.includes(input))) {
    inRangeGuesses.push(input);
    inRange++;
    inRangeOutput.textContent = inRange;
  }
}
  
  
const buttonRandomize = document.getElementById('randomize')
buttonRandomize.addEventListener('click', onButtonClick);

const buttonMultiply = document.getElementById('multiply')
buttonMultiply.addEventListener('click', multiplyCheck);


