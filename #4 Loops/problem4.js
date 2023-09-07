let start = 1
let end = 100
let sum = 0
let count = 0

while(start<=end){
  if(start%2==0){
    sum+=start
    count++
  }
  start++
}
// console.log("Total sum",sum)
// console.log("Total count",count)

const avg = sum/count
console.log("average = ",avg)