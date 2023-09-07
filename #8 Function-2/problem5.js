function myIncludes(arr, value){
    for(let i=0;i<arr.length;i++){
      if(arr[i] == value){
        return true;
      }
    }
    return false;
  }
  let arr = [1,2,3,'one','two','three']
  let value = "three"
  console.log(myIncludes(arr,value))