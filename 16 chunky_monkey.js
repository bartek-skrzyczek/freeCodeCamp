function chunkArrayInGroups(array, size) {

    var results = [];
    while (array.length) {
      results.push(array.splice(0, size));
    }
    console.log(results);
  };
  
  chunkArrayInGroups([0, 1, 2, 3, 4, 5], 3)
  