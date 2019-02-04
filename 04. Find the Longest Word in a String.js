function findLongestWordLength(str) {
  let singleWord = str.split(" ");
  let maxLength = 0;

  for (let i = 0; i < singleWord.length; i++) {
    let longestWord = singleWord.length[i];
    if(singleWord[i].length > maxLength) {
      maxLength = singleWord[i].length;
    }
    
  }
  return maxLength;
}

findLongestWordLength("The quick brown fox jumped over the lazy dog");