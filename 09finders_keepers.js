function findElement(arr, func) {
  let num = 0;
  //let splitArr = arr.split("");
  //console.log(arr);
  for( let i = 0; i < arr.length; i++ ) {
    //console.log(arr[i]);
    if( arr[i] % 2 === 0 ) {
      console.log(arr[i]);
      return arr[i];
    } 
    //return undefined;
  }
  //return num;
  return undefined;
}

findElement([1, 3, 5, 8, 9, 10], num => num % 2 === 0);