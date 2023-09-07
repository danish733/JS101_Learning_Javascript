let arr = [24,56,34,456,564,66]
let sum = 0
let count = 0
for(let i=0; i<=arr.length ; i++){
  if(arr[i]%2===0){
    sum+=arr[i]
    count++
  }
}
const avg = sum/count
  console.log(avg)