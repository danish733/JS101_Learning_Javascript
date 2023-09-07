// Problem 2: Use the above function to print the Primes from 2 to a given limit



function checkPrime(num){
    let count = 0
    for(let i=1;i<=num;i++){
      if(num%i==0) count++
    }
    if(count==2) return true
    else return false
  }
  
  
  let limit = 45
  
  for(let i=2; i<= limit; i++){
    if(checkPrime(i))  console.log(i)
  }