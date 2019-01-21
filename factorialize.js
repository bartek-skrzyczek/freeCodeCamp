// my solution code for "Factorilize the number 5

function factorialize(num) {
var factor = 1;
var numOfFactors = num / 1;
for (i = 1; i <= numOfFactors; i++ ) {
  factor *= i;
  console.log(factor);
  }
return factor;
}