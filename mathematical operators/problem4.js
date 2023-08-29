// Problem 4: Given stored username and password and input username and password, Print if the user can login or not.

let username = "Danish";
let password = "Danish123";

let input_username = "Danish";
let input_password = "danish123";

if(username==input_username){
  if(password==input_password){
    console.log("login");
  }
  else{
    console.log("wrong password");
  }
}
else{
  console.log("username not matched");
}