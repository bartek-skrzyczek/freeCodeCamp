function repeatStringNumTimes(str, num) {
  // repeat after me
  let emptyArr = [];
  let strToArr = str.split("");
  let strArr = emptyArr.push("str");
  //console.log(strToArr);
  let result = str;
    
  if(num <= 0){
    return "";
  }

  for( let i = 1; i < num; i++ ) {
    result = result + str;
    console.log(result);
  }
  //console.log(result);
  return result;
}

repeatStringNumTimes("abc", 3);