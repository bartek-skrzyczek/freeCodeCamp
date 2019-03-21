function frankenSplice(arr1, arr2, n) {
    // It's alive. It's alive!
  
    let slicedArr = arr2.slice();
    slicedArr.splice(n, 0, arr1);
  
    let flatArr = slicedArr.flat();
    console.log(flatArr);
  
    return (flatArr);
  }
  
  frankenSplice([1, 2, 3], [4, 5], 1)