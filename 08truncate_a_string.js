function truncateString(str, num) {
  // Clear out that junk in your trunk
  let charStr = str.split("");
  console.log(charStr);
  let dots = "...";
  let emptyArr = [];
  let result="";

  console.log(str.length);
  console.log(num);

  console.log(str);

  if (str.length <= num ) {
    //console.log(str);
    //console.log(result);
    result = str;
  } else {
      for( let i = 0; i < num; i++ ) {
        emptyArr.push(str[i]);
      }
      let joinStrArr = emptyArr.join("");
      result = joinStrArr + dots;
      console.log(result);
  }


  //console.log(str.length);
  console.log("A-tisket a-tasket A green and yellow basket".length);
  return result;
}

truncateString("A-tisket a-tasket A green and yellow basket", "A-tisket a-tasket A green and yellow basket".length);