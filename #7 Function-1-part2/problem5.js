// Problem-5
// Write a function to convert a character to lower case
// Use this function to convert a given word to lower case
// Use that function to convert an array of strings to array of lower case strings
// Sample Input ["MA", "SA", "I", "SCH", "OOL"]
// Sample Output ["ma", "sa", "i", "sch", "ool"]


function convertChar(char){
    return char.toLowerCase();
  }

  function convertStr(str){
    let bag="";
    for(let i of str){
      bag+= convertChar(i);
    }
    return bag;
  }