// Problem 5: Write a function to replace spaces in a given string with - .

function char(str){
    let bag =""
    
    for(let i of str){
      if(i==" ") bag+="_"  
      else bag+=i
    }
    console.log(bag)
  }
  char("I am danish")