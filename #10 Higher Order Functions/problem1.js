let arr = [10, 24, 56, 72, -10, -88, 100, 564];

let odd = arr.filter((ele,i)=>i%2===1);
let sum = odd.reduce((acc,crr)=>acc+crr,0);

console.log(sum/odd.length);