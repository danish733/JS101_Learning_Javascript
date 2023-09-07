// Problem-6
// Given a string swap the case and print the output
// Sample Input - Test
// Sample Output - tEST
// NOTE: Use multiple functions to achieve the result, NOT one single code block

function convert(char){
    let lower= "abcdefghijklmnopqrstuvwxyz";
    let upper ="ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    
    for(let i in lower){
      if(lower[i]==char){
        char = upper[i]
      }
      else if(upper[i]==char){
        char = lower[i]
      }
    }
    return char
  }
  
  let str= "Test"
  let bag= ""
  for(let i of str){
    bag+=convert(i)
  }
  console.log(bag)