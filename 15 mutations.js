function mutation(arr) {

    var validLetters = {};

    for (let i = 0; i < arr[0].length; i++){
        let letter = arr[0][i].toLowerCase();
        validLetters[letter] = true;
    }

    for (let i = 0; i < arr[1].length; i++){
       let letter = arr[1][i].toLowerCase();
       if (!validLetters[letter]){
         return false;
       }
    }
    return true;
}

mutation(["hello", "hey"])