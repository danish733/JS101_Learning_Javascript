// Write code to calculate the average of an array
// If there are no items in the array it should return 0
// NOTE: Create a function to find the sum of elements in an array and use that function to find out the average

function sum(arr){
    let sum = 0
    for(let i of arr)  sum+=i
    return sum
  }
  let arr = [2,5,5,6];
  let avg = sum(arr)/arr.length 
  
  if(arr.length == 0) console.log("0");
  else console.log(avg);
  