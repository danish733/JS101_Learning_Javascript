// Write code to find the absolute difference of two numbers

// Sample Input-1 12,4
// Sample Output-1 8
// Sample Input-2 4,18
// Sample Output-2 14
// NOTE: It must consist of two functions 1. To find the difference 2. To find the absolute value

function diff(num1,num2) {
    return num1-num2;
  }
  
  function absDiff(num1,num2) {
    if(num1>num2)
      console.log(num1-num2);
    else 
      console.log(num2-num1);
  }
  absDiff(5,16)