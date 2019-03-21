function getIndexToIns(arr, num) {
    // Find my place in this sorted array.
  
  
    function sortArr (a,b) {
      return a-b;
    }
  
    let singleArr = arr.concat(num);
    singleArr.sort(sortArr);
    return(singleArr.indexOf(num));
  }
  
  getIndexToIns([40, 60], 50);