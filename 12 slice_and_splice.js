function frankenSplice(arr1, arr2, n) {
  // It's alive. It's alive!

  let slicedArr = arr2.slice();
  for (let i = 0; i < arr1.length; i++) {
    slicedArr.splice(n, 0, arr1[i]);
    n++;
  }
  

  console.log(Array.from(slicedArr));
  return (slicedArr);
}

frankenSplice([1, 2, 3], [4, 5], 1);