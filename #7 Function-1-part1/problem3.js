// Use the same function to print Non-Primes from 2 to a given limit

function checkNonPrime(num){
    let count = 0
    for(let i=1;i<=num;i++){
      if(num%i==0) count++
    }
    if(count==2) return true
    else return false
  }
  
  
  let limit = 10
  
  for(let i=2; i<= limit; i++){
    if(checkNonPrime(i)==false)  console.log(i)
  }