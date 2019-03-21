function largestOfFour(arr) {
  //console.log(arr[0][1]);
  let emptyArr = [];
  for(let i = 0; i < arr.length; i++) {
    let largestNum = Math.max.apply(Math, arr[i]);
    emptyArr.push(largestNum);
  }
  //return largestNum;
  return(emptyArr);
}

largestOfFour([[4, 5, 1, 3], [13, 27, 18, 26], [32, 35, 37, 39], [1000, 1001, 857, 1]]);
