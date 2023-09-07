// Problem 4: Write a function to check if the char is a small case or not.

function checkSmall(char){
  
  
    if(char === char.toLowerCase()) return "small case"
    else if(char === char.toUpperCase()) return "upper Case"
  
  
}
console.log(checkSmall("Z"))