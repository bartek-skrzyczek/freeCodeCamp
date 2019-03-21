function bouncer(arr) {
    // Don't show a false ID to this bouncer.
    let filteredArr = arr.filter(Boolean);
    return filteredArr;
  }
  
  bouncer([7, "ate", "", false, 9]);