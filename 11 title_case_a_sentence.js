function titleCase(str) {
  let strWords = str.split(" ");
  let strLetters = str.split("");
  console.log(strWords.length);
  let lowerCase = "";
  let upperCaseWord = "";
  var output = "";
  for (let i = 0; i < strWords.length; i++) {
    lowerCase = strWords[i].toLowerCase();
    upperCaseWord = strWords[i][0].toUpperCase();

    let charReplacement = lowerCase.replace(lowerCase[0],upperCaseWord);
    output = output += charReplacement + " ";
  } 
  console.log(output.replace(/\s?$/,''));
  return(output.replace(/\s?$/,''));
}

titleCase("sHoRt AnD sToUt");