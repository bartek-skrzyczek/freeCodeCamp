function confirmEnding(str, target) {
  // "Never give up and good luck will find you."
  // -- Falcor

  let strToChar = str.split("");
  let targetToChar = target.split("");

  let strToCharLength = strToChar.length;
  let targetToCharLength = targetToChar.length;

  let comparisonArr = [];

console.log(strToCharLength);
console.log(targetToCharLength);
console.log(strToChar);
console.log(targetToChar);

  //for( let i = strToCharLength.length; i > 0; i-- ) {
    //console.log("aa");
    //}

  for( let i = targetToCharLength; i > 0; i-- ) {
    //console.log((str[(strToCharLength) - i]) == target[i-1]);
    //console.log(str[strToCharLength-targetToCharLength]);
    //console.log(target[i-1]);
    if ((str[str.length-i]) == (target[target.length-i])) {
      return true;
    }
    else {return false}
    }

    
}

confirmEnding("Congratulation", "on");