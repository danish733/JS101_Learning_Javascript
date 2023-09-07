// Problem 3: Taking the following array into consideration get the output as given below:
// arr = [3,4,5,6,7]
// Output ==> 3 - 5 - 7


let arr = [3,4,5,6,7];
let str = arr.filter((ele,i)=>i%2===0).join(" - ");
console.log(str);