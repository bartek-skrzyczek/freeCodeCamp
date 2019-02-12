function alphabeticalOrder(arr) {
  // Add your code below this line

  let sortedArr = arr.sort(function(a,b){
      if (a < b) return -1;
      else if (a > b) return 1;
      return 0;
  })
  return sortedArr;

  // Add your code above this line
}
alphabeticalOrder(["a", "d", "c", "a", "z", "g"]);
