function customJoin(array, value) {
    let bag = "";
  
    for (let i = 0; i < array.length; i++) {
      bag += array[i];
  
      if (i < array.length - 1) {
        bag += value;
      }
    }
  
    return bag;
  }
  
  let myArray = ['strawberry', 'cherry', 'you'];
  let joining = customJoin(myArray, "-");
  
  console.log(joining)